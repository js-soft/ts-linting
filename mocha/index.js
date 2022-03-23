"use strict"

module.exports = {
    plugins: ["mocha", "jest", "chai-expect", "chai-friendly"],
    reportUnusedDisableDirectives: true,
    rules: {
        "mocha/no-async-describe": "warn",
        "mocha/no-exclusive-tests": "warn",
        "mocha/no-global-tests": "warn",
        "mocha/no-identical-title": "warn",
        "mocha/no-mocha-arrows": "warn",
        "mocha/no-nested-tests": "warn",
        "mocha/no-pending-tests": "warn",
        "mocha/no-return-and-callback": "warn",
        "mocha/no-return-from-async": "warn",
        "mocha/no-sibling-hooks": "warn",
        "mocha/no-skipped-tests": "warn",
        "jest/consistent-test-it": ["warn", { fn: "it", withinDescribe: "it" }],
        "jest/no-commented-out-tests": "warn",
        "jest/expect-expect": "warn",
        "chai-expect/no-inner-compare": "warn",
        "chai-expect/no-inner-literal": "warn",
        "chai-expect/missing-assertion": "warn",
        "chai-expect/terminating-properties": "warn",
        "no-unused-expressions": "off",
        "chai-friendly/no-unused-expressions": "warn"
    }
}
