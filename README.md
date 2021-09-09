# @js-soft/eslint-config-ts

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for j&s-soft Projects

## Installation

```
$ npm install --save-dev eslint @js-soft/eslint-config-ts
```

## Usage

Once the `@js-soft/eslint-config-ts` package is installed, you can use it by specifying `@js-soft/ts` in the [`extends`](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
    "extends": "@js-soft/ts",
    "rules": {
        // Additional, per-project rules...
    }
}
```

## License

MIT
