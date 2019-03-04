use Mix.Config

import_config "dev.exs"

server_port = System.get_env("THYSIS_PHOENIX_INTEGRATION_TEST_PORT") || 4017
front_end_port = System.get_env("THYSIS_FRONTEND_PORT") || "3017"

config :thysis, sql_sandbox: true

config :thysis, front_end_url: "http://localhost:" <> front_end_port

config :logger, :console,
  format: "###### $time $metadata[$level] $message\n",
  metadata: [:request_id]

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 10

config :thysis, ThysisWeb.Endpoint,
  http: [port: server_port],
  server: true

config :thysis, Thysis.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "thysis_e2e",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox,
  timeout: 600_000,
  pool_timeout: 600_000,
  ownership_timeout: 600_000
