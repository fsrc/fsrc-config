// Generated by LiveScript 1.6.0
var ref$, readFile, exists;
ref$ = require('fs'), readFile = ref$.readFileSync, exists = ref$.existsSync;
module.exports = function(name, defaults){
  var HOME, CONFIG, read;
  HOME = process.env.HOME;
  CONFIG = HOME + "/.config/fsrc/" + name + ".config";
  read = function(fullPath){
    var data, ex;
    data = readFile(fullPath, 'utf8');
    try {
      return JSON.parse(data);
    } catch (e$) {
      ex = e$;
      console.error("ERROR: Could not parse JSON in '" + fullPath + "'");
      console.error(ex.message);
      return process.exit(255);
    }
  };
  if (exists(CONFIG)) {
    read(CONFIG);
  } else {
    console.error("ERROR: Configuration missing\nUse '" + CONFIG + "'\nDefaults:\n" + JSON.stringify(defaults, null, 2));
    process.exit(255);
  }
  return config;
};