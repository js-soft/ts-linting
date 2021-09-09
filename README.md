# @js-soft/ts-linting

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for j&s-soft Projects

## Installation

```
$ npm install --save-dev eslint @js-soft/ts-linting
```

## Usage

Once the `@js-soft/ts-linting` package is installed, you can use it by specifying `@js-soft/ts-linting` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
    "extends": "@js-soft/ts-linting",
    "rules": {
        // Additional, per-project rules...
    }
}
```

## License

MIT
