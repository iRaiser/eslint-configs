# ESLint Config

[![Version](https://flat.badgen.net/npm/v/@iraiser/eslint-config-base)](https://www.npmjs.com/package/@iraiser/eslint-config-base)
[![Download](https://flat.badgen.net/npm/dt/@iraiser/eslint-config-base)](https://www.npmjs.com/package/@iraiser/eslint-config-base)

ESLint shareable config for the iRaiser CSS style guide.

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
