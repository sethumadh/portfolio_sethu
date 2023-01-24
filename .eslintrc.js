module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "next",
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off"
    },
    
}
