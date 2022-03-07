const skills = require("./src/data/skills");

const envs = [
  'title', 'description', 'keywords', 'ga_code'
];

const locals =  envs.reduce((locals, key) => ({ ...locals, [key]: process.env[key.toUpperCase()] }), {});
module.exports = {
    plugins: {
        "posthtml-include": {
            root: "./src"
        },
        "posthtml-expressions": {
            locals: { ...locals, skills }
        }
    }
}
