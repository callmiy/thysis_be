defmodule TyEmails do
  use Phoenix.View,
    root: "lib/ty_emails/templates",
    namespace: TyEmails

  @moduledoc ~S"""
    Used for sending emails to users
  """

  import Constantizer

  alias TyEmails.DefaultImpl

  @type email_address :: binary()

  @behaviour TyEmails.Impl

  @impl true
  @spec send_welcome(email_address) :: :ok
  def send_welcome(email_address) do
    impl().send_welcome(email_address)
  end

  @impl true
  @spec send_password_recovery(email_address, token :: binary()) :: :ok
  def send_password_recovery(email_address, token) do
    impl().send_password_recovery(email_address, token)
    :ok
  end

  defconstp impl do
    Application.get_env(:ty_emails, :impl, DefaultImpl)
  end
end
