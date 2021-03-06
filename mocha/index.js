"use strict"

module.exports = {
    plugins: ["mocha", "jest", "chai-expect", "chai-friendly"],
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
        "mocha/no-sibling-hooks": "error",
        "mocha/no-skipped-tests": "error",
        "jest/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
        "jest/no-commented-out-tests": "error",
        "jest/expect-expect": "error",
        "chai-expect/no-inner-compare": "error",
        "chai-expect/no-inner-literal": "error",
        "chai-expect/missing-assertion": "error",
        "chai-expect/terminating-properties": "error",
        "no-unused-expressions": "off",
        "chai-friendly/no-unused-expressions": "error"
    }
}
