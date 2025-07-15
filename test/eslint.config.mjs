import js from "@js-soft/eslint-config-ts"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        extends: [js],

        files: ["*.ts"],

        settings: {
            jest: {
                version: 26
            }
        }
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    }
)
