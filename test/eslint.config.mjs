import js, { configs } from "@js-soft/eslint-config-ts"
import tseslint from "typescript-eslint"

export default tseslint.config({
    extends: [js, configs.base, configs.jest, configs.withFormatting],
    files: ["*.ts"],
    languageOptions: { parserOptions: { project: "./tsconfig.json" } },
    settings: { jest: { version: 30 } }
})
