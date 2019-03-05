defmodule Thysis.Accounts.UserApi do
  @moduledoc """
  The Account context.
  """

  import Ecto.Query, warn: false

  alias Thysis.Repo
  alias Thysis.Accounts.User

  @doc """
  Returns the list of users.

  ## Examples

      iex> list()
      [%User{}, ...]

  """
  def list do
    Repo.all(User)
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get(123)
      %User{}

      iex> get(456)
      ** nil

  """
  def get(id), do: Repo.get(User, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_(%{field: value})
      {:ok, %User{}}

      iex> create_(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_(user, %{field: new_value})
      {:ok, %User{}}

      iex> update_(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_(user)
      %Ecto.Changeset{source: %User{}}

  """
  def change_(%User{} = user, attrs \\ %{}) do
    User.changeset(user, attrs)
  end

  def data() do
    Dataloader.Ecto.new(Repo, query: &query/2)
  end

  def query(queryable, _params) do
    queryable
  end
end
