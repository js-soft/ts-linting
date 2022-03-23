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
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": [
            "warn",
            {
                default: "array"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/method-signature-style": ["warn", "method"],
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/non-nullable-type-assertion-style": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-literal-enum-member": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "warn",
        "@typescript-eslint/require-array-sort-compare": ["warn", { ignoreStringArrays: true }],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/return-await": ["warn", "always"],
        "@typescript-eslint/require-await": "warn",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
        quotes: "off",
        "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true }],
        "@typescript-eslint/explicit-module-boundary-types": [
            "warn",
            {
                allowArgumentsExplicitlyTypedAsAny: true
            }
        ],
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": ["warn"],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/naming-convention": [
            "warn",
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
        "no-caller": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-new-object": "warn",
        "no-new-wrappers": "warn",
        "no-throw-literal": "warn",
        "no-with": "warn",
        "prefer-promise-reject-errors": "warn",
        "no-array-constructor": "warn",
        "no-multi-str": "warn",
        "one-var": [
            "warn",
            {
                var: "never",
                let: "never",
                const: "never"
            }
        ],
        "spaced-comment": ["warn", "always"],
        "constructor-super": "warn",
        "no-new-symbol": "warn",
        "no-this-before-super": "warn",
        "no-var": "warn",
        "prefer-const": ["warn", { destructuring: "all" }],
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        curly: ["warn", "multi-line"],
        "getter-return": "warn",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-debugger": "warn",
        "no-dupe-args": "warn",
        "no-dupe-else-if": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-ex-assign": "warn",
        "no-extra-boolean-cast": "warn",
        "no-import-assign": "warn",
        "no-invalid-regexp": "warn",
        "no-setter-return": "warn",
        "no-sparse-arrays": "warn",
        "no-unreachable": "warn",
        "no-unreachable-loop": "warn",
        "no-unsafe-finally": "warn",
        "no-unsafe-negation": "warn",
        "no-unsafe-optional-chaining": "warn",
        "use-isnan": "warn",
        "valid-typeof": "warn",
        "array-callback-return": "warn",
        "default-case-last": "warn",
        eqeqeq: "warn",
        "grouped-accessor-pairs": "warn",
        "no-alert": "warn",
        "no-constructor-return": "warn",
        "no-else-return": "warn",
        "no-eval": "warn",
        "no-extra-label": "warn",
        "no-implied-eval": "warn",
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-return-assign": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unused-labels": "warn",
        "no-useless-call": "warn",
        "no-useless-catch": "warn",
        "no-useless-concat": "warn",
        "no-useless-escape": "warn",
        "no-void": "warn",
        yoda: "warn",
        "no-unused-expressions": "warn",
        "no-lonely-if": "warn",
        "no-duplicate-imports": "warn",
        "no-useless-rename": "warn",
        "prefer-template": "warn",
        "require-yield": "warn",
        "no-empty": "warn"
    }
}
