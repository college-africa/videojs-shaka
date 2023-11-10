module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended","videojs"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "videojs": "readonly",
        "shaka": "readonly",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "require-jsdoc": 0,
        "no-inline-comments": 0
    }
};