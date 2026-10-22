# @js-soft/eslint-config-ts

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for j&s-soft Projects

## Installation

```
$ npm install --save-dev eslint @js-soft/eslint-config-ts
```

## Usage

Create an `eslint.config.mjs` file using ESLint's [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files):

```js
import base from "@js-soft/eslint-config-ts"

export default [
    ...base,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            // Additional, per-project rules...
        }
    }
]
```

The linted TypeScript files must be included in your `tsconfig.json`.

Additional configurations are available as `configs.jest`, `configs.mocha`, and `configs.withFormatting` via the named `configs` export.

## License

MIT
