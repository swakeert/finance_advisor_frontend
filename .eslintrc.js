module.exports = {
    env: {
        browser: true,
        jest: true,
        node: true,
        es2021: true
    },
    extends: [
        // "react-app",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/prettier",

    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 12,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",


    ],
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            "typescript": {}
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true
            }
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ],
        "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-param-reassign": ["error", { "props": false }],


    }
};