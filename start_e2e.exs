System.put_env("MIX_ENV", "e2e")
System.put_env("THYSIS_PHOENIX_PORT", "4017")
System.cmd("cmd", ["/k", "iex", "--werl", "-S", "mix", "phx.server"])
