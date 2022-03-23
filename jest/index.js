"use strict"

module.exports = {
    plugins: ["jest"],
    reportUnusedDisableDirectives: true,
    rules: {
        "jest/consistent-test-it": ["warn", { fn: "test", withinDescribe: "test" }],
        "jest/expect-expect": "warn",
        "jest/max-nested-describe": ["warn", { max: 2 }],
        "jest/no-alias-methods": "warn",
        "jest/no-commented-out-tests": "warn",
        "jest/no-disabled-tests": "warn",
        "jest/no-conditional-expect": "warn",
        "jest/no-deprecated-functions": "warn",
        "jest/no-done-callback": "warn",
        "jest/no-duplicate-hooks": "warn",
        "jest/no-export": "warn",
        "jest/no-focused-tests": "warn",
        "jest/no-identical-title": "warn",
        "jest/no-if": "warn",
        "jest/no-jest-import": "warn",
        "jest/no-mocks-import": "warn",
        "jest/no-standalone-expect": "warn",
        "jest/no-test-prefixes": "warn",
        "jest/no-test-return-statement": "warn",
        "jest/prefer-hooks-on-top": "warn",
        "jest/prefer-spy-on": "warn",
        "jest/prefer-strict-equal": "warn",
        "jest/prefer-to-be": "warn",
        "jest/prefer-to-contain": "warn",
        "jest/prefer-to-have-length": "warn",
        "jest/prefer-todo": "warn",
        "jest/require-to-throw-message": "warn",
        "jest/valid-describe-callback": "warn",
        "jest/valid-expect": ["warn", { alwaysAwait: true, minArgs: 1, maxArgs: 2 }],
        "jest/valid-expect-in-promise": "warn"
    }
}
