"use strict"

module.exports = {
    plugins: ["mocha", "jest"],
    reportUnusedDisableDirectives: true,
    rules: {
        "mocha/no-async-describe": "error",
        "mocha/no-exclusive-tests": "error",
        "mocha/no-global-tests": "error",
        "mocha/no-identical-title": "error",
        "mocha/no-mocha-arrows": "error",
        "mocha/no-nested-tests": "error",
        "mocha/no-pending-tests": "error",
        "mocha/no-return-and-callback": "error",
        "mocha/no-return-from-async": "error",
        "mocha/no-setup-in-describe": "error",
        "mocha/no-sibling-hooks": "error",
        "mocha/no-skipped-tests": "error",
        "mocha/no-synchronous-tests": "error",
        "mocha/valid-suite-description": ["warn", "^[a-z]"],
        "mocha/valid-test-description": ["warn", "^[a-z]"],
        "jest/consistent-test-it": ["error", { fn: "test", withinDescribe: "test" }],
        "chai-expect/no-inner-compare": "error",
        "chai-expect/no-inner-literal": "error",
        "chai-expect/missing-assertion": "error",
        "chai-expect/terminating-properties": "error"
    }
}
