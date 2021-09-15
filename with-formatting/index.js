"use strict"

module.exports = {
    extends: ["../index.js"],
    rules: {
        indent: [
            "error",
            4,
            {
                CallExpression: {
                    arguments: 1
                },
                FunctionDeclaration: {
                    body: 1,
                    parameters: 1
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 1
                },
                MemberExpression: 1,
                ObjectExpression: 1,
                SwitchCase: 1,
                ignoredNodes: ["ConditionalExpression"]
            }
        ],
        "max-len": [
            "error",
            120,
            {
                ignorePattern: "(^import)|(^\\s+// TODO:)",
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreTrailingComments: true
            }
        ],
        "operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "no-unexpected-multiline": "error",
        "no-multi-spaces": "error",
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "never"],
        "brace-style": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": ["error", { max: 2 }],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent"],
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "switch-colon-spacing": "error",
        "arrow-parens": ["error", "always"],
        "rest-spread-spacing": "error",
        "yield-star-spacing": ["error", "after"],
        "generator-star-spacing": ["error", "after"]
    }
}
