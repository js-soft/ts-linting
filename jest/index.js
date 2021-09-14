"use strict"

module.exports = {
    plugins: ["jest"],
    reportUnusedDisableDirectives: true,
    rules: {
        "jest/consistent-test-it": ["error", { fn: "test", withinDescribe: "test" }],
        "jest/expect-expect": [
            "error",
            {
                assertFunctionNames: ["expect", "*.executeTests", "expectSuccess", "expectError"]
            }
        ],
        "jest/lowercase-name": "error",
        "jest/max-nested-describe": ["error", { max: 2 }],
        "jest/no-alias-methods": "error",
        "jest/no-commented-out-tests": "error",
        "jest/no-disabled-tests": "error",
        "jest/no-conditional-expect": "error",
        "jest/no-deprecated-functions": "error",
        "jest/no-done-callback": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-export": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/no-if": "error",
        "jest/no-jest-import": "error",
        "jest/no-mocks-import": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-to-be-null": "error",
        "jest/prefer-to-be-undefined": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-to-throw-message": "error",
        "jest/valid-describe": "error",
        "jest/valid-expect": ["error", { alwaysAwait: true, minArgs: 1, maxArgs: 2 }],
        "jest/valid-expect-in-promise": "error",
        "jest/valid-title": "error"
    }
}
