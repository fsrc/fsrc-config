require! {
  fs : {
    read-file-sync : read-file
    exists-sync : exists
  }
}

module.exports = (name, defaults) ->
  HOME   = process.env.HOME
  CONFIG = "#HOME/.config/fsrc/#name.config"

  read = (full-path) ->
    data = read-file(full-path, \utf8)

    try
      JSON.parse(data)
    catch ex
      console.error "ERROR: Could not parse JSON in '#full-path'"
      console.error ex.message
      process.exit(255)

  if exists CONFIG
    read(CONFIG)

  else
    console.error """
    ERROR: Configuration missing
    Use '#CONFIG'
    Defaults:
    #{JSON.stringify(defaults, null, 2)}
    """

    process.exit(255)

  config

