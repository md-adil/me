const envs = [
  'title', 'description', 'keywords'
];
const locals =  envs.reduce((locals, key) => ({ ...locals, [key]: process.env[key.toUpperCase()] }), {});
module.exports = {
  "plugins": {
    "posthtml-include": {
        "root": "./src"
    },
    "posthtml-expressions": {
      locals
    }
  }
}