defmodule Thysis.Schema.UserTest do
  use Thysis.DataCase, async: false

  alias ThysisWeb.Schema
  alias Thysis.Query.Registration, as: RegQuery
  alias Thysis.Factory.Registration, as: RegFactory
  alias ThysisWeb.Query.User, as: Query
  alias Thysis.Factory.User, as: Factory
  alias ThysisWeb.Auth.Guardian, as: GuardianApp
  alias Thysis.Factory.Project, as: ProjectFactory
  alias Thysis.Accounts

  describe "mutation" do
    # @tag :skip
    test "registers user succeeds" do
      %{
        "name" => name,
        "email" => email
      } =
        attrs =
        RegFactory.params()
        |> RegFactory.stringify()

      queryMap = RegQuery.register()

      query = """
        mutation RegisterUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      assert {:ok,
              %{
                data: %{
                  "registration" => %{
                    "id" => _,
                    "name" => ^name,
                    "email" => ^email,
                    "jwt" => _jwt,
                    "credential" => %{
                      "id" => _
                    }
                  }
                }
              }} =
               Absinthe.run(query, Schema,
                 variables: %{
                   "registration" => attrs
                 }
               )
    end

    # @tag :skip
    test "registers user fails for none unique email" do
      attrs = RegFactory.params()

      RegFactory.insert(attrs)
      queryMap = RegQuery.register()

      query = """
        mutation RegisterUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      assert {:ok,
              %{
                errors: [
                  %{
                    message:
                      "{\"name\":\"user\",\"error\":{\"email\":\"has already been taken\"}}",
                    path: ["registration"]
                  }
                ]
              }} =
               Absinthe.run(query, Schema,
                 variables: %{
                   "registration" => RegFactory.stringify(attrs)
                 }
               )
    end

    # @tag :skip
    test "update user succeeds" do
      user = RegFactory.insert()
      {:ok, jwt, _claim} = GuardianApp.encode_and_sign(user)

      attrs =
        Factory.params(jwt: jwt)
        |> RegFactory.stringify()

      queryMap = Query.update()

      query = """
        mutation updateUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      assert {:ok,
              %{
                data: %{
                  "update" => %{
                    "id" => _,
                    "name" => name,
                    "email" => email,
                    "jwt" => _jwt
                  }
                }
              }} =
               Absinthe.run(query, Schema,
                 variables: %{
                   "user" => attrs
                 }
               )

      refute user.name == name
      refute user.email == email
    end

    # @tag :skip
    test "login succeeds" do
      %{email: email, password: password} = params = RegFactory.params()
      user = RegFactory.insert(params)

      project_id =
        ProjectFactory.insert(user_id: user.id).id
        |> Integer.to_string()

      queryMap = RegQuery.login()

      query = """
        mutation LoginUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      variables = %{
        "login" => %{
          "email" => email,
          "password" => password
        }
      }

      assert {:ok,
              %{
                data: %{
                  "login" => %{
                    "id" => _,
                    "name" => name,
                    "email" => ^email,
                    "jwt" => _jwt,
                    "projects" => [
                      %{
                        "id" => ^project_id
                      }
                    ]
                  }
                }
              }} = Absinthe.run(query, Schema, variables: variables)
    end

    # @tag :skip
    test "login fails" do
      %{email: email, password: password} = params = RegFactory.params()
      RegFactory.insert(params)

      queryMap = RegQuery.login()

      query = """
        mutation LoginUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      password = password <> "q"

      assert {:ok,
              %{
                errors: [%{message: "{\"error\":\"Invalid email/password\"}"}]
              }} =
               Absinthe.run(query, Schema,
                 variables: %{
                   "login" => %{
                     "email" => email,
                     "password" => password
                   }
                 }
               )
    end
  end

  describe "query" do
    test "refreshes user succeeds with ok jwt" do
      user = RegFactory.insert()
      user_id = Integer.to_string(user.id)
      {:ok, jwt, _claims} = GuardianApp.encode_and_sign(user)

      queryMap = Query.refresh()

      query = """
        query RefreshUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      assert {:ok,
              %{
                data: %{
                  "refresh" => %{"id" => ^user_id, "jwt" => new_jwt}
                }
              }} =
               Absinthe.run(query, Schema,
                 variables: %{
                   "refresh" => %{"jwt" => jwt}
                 }
               )

      refute jwt == new_jwt
    end

    test "refreshes user fails for tampered with jwt" do
      user = RegFactory.insert()
      {:ok, jwt, _claims} = GuardianApp.encode_and_sign(user)

      queryMap = Query.refresh()

      query = """
        query RefreshUser(#{queryMap.parameters}) {
          #{queryMap.query}
        }

        #{queryMap.fragments}
      """

      assert {:ok,
              %{
                data: %{"refresh" => nil},
                errors: [
                  %{
                    locations: [%{column: 0, line: 2}],
                    message: "{\"error\":\"invalid_token\"}",
                    path: ["refresh"]
                  }
                ]
              }} =
               Absinthe.run(query, Schema,
                 variables: %{
                   "refresh" => %{"jwt" => jwt <> "9"}
                 }
               )
    end
  end

  describe "password recovery" do
    test "request password recovery token fails if email not in system" do
      email = "unknown email"

      assert {:ok,
              %{
                errors: [
                  %{
                    message: "Invalid email"
                  }
                ]
              }} =
               Absinthe.run(
                 Query.request_password_recovery_token(),
                 Schema,
                 variables: %{"email" => email}
               )
    end

    test "request password recovery token succeeds" do
      %{email: email} = user = RegFactory.insert()

      assert %{
               pwd_recovery_token: nil,
               pwd_recovery_token_expires_at: nil
             } = user.credential

      assert {:ok,
              %{
                data: %{
                  "anfordernPzs" => %{
                    "email" => ^email,
                    "token" => token
                  }
                }
              }} =
               Absinthe.run(
                 Query.request_password_recovery_token(),
                 Schema,
                 variables: %{"email" => email}
               )

      assert {:ok, _} = GuardianApp.decode_and_verify(token)

      assert %{
               pwd_recovery_token: ^token,
               pwd_recovery_token_expires_at: expiry_time
             } = Accounts.get_credential(user.credential.id)

      refute expiry_time == nil
    end
  end

  describe "Benutzer entferne" do
    test "erfolgreich" do
      %{email: email} = user = RegFactory.insert()

      assert {:ok,
              %{
                data: %{
                  "benutzerEntferne" => true
                }
              }} =
               Absinthe.run(
                 Query.benutzer_entferne(),
                 Schema,
                 variables: %{"email" => email},
                 context: %{current_user: user}
               )
    end

    test "schlagt fehl wenn gitb es kein Benutzer" do
      assert {:ok,
              %{
                errors: [
                  %{
                    message: "Unauthorized"
                  }
                ]
              }} =
               Absinthe.run(
                 Query.benutzer_entferne(),
                 Schema,
                 variables: %{"email" => "a@b.com"}
               )
    end

    test "schlagt fehl wenn BenutzerEmail und EingebenEmail nicht gleich" do
      assert {:ok,
              %{
                errors: [
                  %{
                    message: "Unauthorized"
                  }
                ]
              }} =
               Absinthe.run(
                 Query.benutzer_entferne(),
                 Schema,
                 variables: %{"email" => "a@b.com"},
                 context: %{current_user: %{email: "b@b.com"}}
               )
    end
  end
end
