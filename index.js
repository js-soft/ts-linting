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
    reportUnusedDisableDirectives: true,
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
        "no-useless-constructor":"off",
        "@typescript-eslint/no-useless-constructor": "error",
        quotes: "off",
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                allowArgumentsExplicitlyTypedAsAny: true
            }
        ],
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": ["error"],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "allow"
            },
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "enumMember",
                format: ["PascalCase"]
            },
            {
                selector: "classProperty",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "allow"
            }
        ],
        "no-caller": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-with": "error",
        "prefer-promise-reject-errors": "error",
        "no-array-constructor": "error",
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
        "no-new-symbol": "error",
        "no-this-before-super": "error",
        "no-var": "error",
        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        curly: ["error", "multi-line"],
        "getter-return": "error",
        "no-console": "error",
        "no-constant-condition": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "array-callback-return": "error",
        "default-case-last": "error",
        "eqeqeq": "error",
        "grouped-accessor-pairs": "error",
        "no-alert": "error",
        "no-constructor-return": "error",
        "no-else-return": "error",
        "no-eval": "error",
        "no-extra-label": "error",
        "no-implied-eval": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-return-assign": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-void": "error",
        "yoda": "error",
        "no-unused-expressions": "error",
        "no-lonely-if": "error",
        "no-duplicate-imports": "error",
        "no-useless-rename": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "no-empty": "error"
    }
}
