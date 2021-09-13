"use strict"

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
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
        "@typescript-eslint/require-await": "error",
        quotes: "off",
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                allowArgumentsExplicitlyTypedAsAny: true
            }
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "enumMember",
                format: ["PascalCase"]
            }
        ],
        "no-caller": "error",
        "quote-props": ["error", "as-needed"],
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-with": "error",
        "prefer-promise-reject-errors": "error",
        "no-array-constructor": "error",
        camelcase: "off",
        "no-multi-str": "error",
        "one-var": [
            "error",
            {
                var: "never",
                let: "never",
                const: "never"
            }
        ],
        "spaced-comment": ["error", "always"],
        "constructor-super": "error",
        "generator-star-spacing": ["error", "after"],
        "no-new-symbol": "error",
        "no-this-before-super": "error",
        "no-var": "error",
        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        curly: ["error", "multi-line"],
        indent: "off",
        semi: "off",
        "yield-star-spacing": "off"
    }
}
