defmodule LaunchIEX do
  def run([mode]) do
    System.put_env("MIX_ENV", "e2e")
    System.put_env("THYSIS_PHOENIX_PORT", "4017")

    System.put_env(
      "THYSIS_FRONTEND_PORT",
      if(mode == "dev", do: "3016", else: "3017")
    )

    System.cmd("cmd", ["/k", "iex", "--werl", "-S", "mix", "phx.server"])
  end
end

LaunchIEX.run(System.argv())
