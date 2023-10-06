# iRaiser ESLint Configs

ESLint configs for the iRaiser style guide.

## Install

    npm install @iraiser/eslint-config-base eslint --save-dev
    
## Usage

Create ``.eslintrc`` file on root of your project.

```
{
    "extends": [
        "@iraiser/eslint-config-base"
    ]
}
```

You can extend the rules with your own config, see [ESLint documentation](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config).


## Release

When you have finish developing a feature, bugfix or something else, push your changes on `main` branch and launch
the `release` command:

```shell
npm run release
```

## Packages

| Package                                                                                                            | Version                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [``@iraiser/eslint-config-base``](https://github.com/iRaiser/eslint-configs/blob/main/packages/eslint-config-base) | [![Version](https://flat.badgen.net/npm/v/@iraiser/eslint-config-base)](https://www.npmjs.com/package/@iraiser/eslint-config-base) |
| [``@iraiser/eslint-config-vue``](https://github.com/iRaiser/eslint-configs/blob/main/packages/eslint-config-vue)   | [![Version](https://flat.badgen.net/npm/v/@iraiser/eslint-config-vue)](https://www.npmjs.com/package/@iraiser/eslint-config-vue)   |
