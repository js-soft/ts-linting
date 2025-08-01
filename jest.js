// @ts-check

import jest from "eslint-plugin-jest"
import tseslint from "typescript-eslint"

export default tseslint.config({
    files: ["**/*.ts"],
    plugins: { jest },
    linterOptions: {
        reportUnusedDisableDirectives: true
    },
    rules: {
        "jest/consistent-test-it": ["error", { fn: "test", withinDescribe: "test" }],
        "jest/expect-expect": "error",
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
        "jest/no-conditional-in-test": "error",
        "jest/no-mocks-import": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-to-be": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-to-throw-message": "error",
        "jest/valid-describe-callback": "error",
        "jest/valid-expect": ["error", { alwaysAwait: true, minArgs: 1, maxArgs: 2 }],
        "jest/valid-expect-in-promise": "error"
    }
})
