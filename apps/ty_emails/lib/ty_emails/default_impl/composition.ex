defmodule TyEmails.DefaultImpl.Composition do
  @moduledoc false
  import Swoosh.Email

  @from_email "noreply@thysis.com"

  def welcome(email) do
    new()
    |> to(email)
    |> from(@from_email)
    |> subject("Welcome to Thysis!")
    |> html_body("<h1>Thanks for signing up for Thysis, #{email}!</h1>")
  end

  def password_recovery(email, token) do
    msg =
      Phoenix.View.render_to_string(
        TyEmails,
        "recovery.html",
        token: token
      )

    new()
    |> to(email)
    |> from(@from_email)
    |> subject("Reset your password")
    |> html_body(msg)
  end
end
