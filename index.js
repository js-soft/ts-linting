"use strict"

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["google"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        // "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/require-array-sort-compare": ["error", { ignoreStringArrays: true }],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/return-await": ["error", "always"],
        "no-return-await": "off",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        quotes: "off",
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                allowArgumentsExplicitlyTypedAsAny: true
            }
        ],
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
        semi: "off",
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
        "comma-dangle": "off",
        "require-jsdoc": "off",
        "object-curly-spacing": ["error", "always"],
        "valid-jsdoc": "off",
        "brace-style": "off",
        "guard-for-in": "off",
        "operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "no-invalid-this": "off",
        "quote-props": ["error", "as-needed"],
        "no-empty-functions": "error"
    }
}
