'use strict';

module.exports = {
    'extends': [
        'eslint:recommended'
    ],
    'env': {
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'array-bracket-newline': [
            'error',
            'consistent'
        ],
        'brace-style': 'error',
        'comma-spacing': 'error',
        'curly': 'error',
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'keyword-spacing': 'error',
        'eqeqeq': [
            'error',
            'smart'
        ],
        'no-multi-spaces': 'error',
        'no-unused-vars': 'warn',
        'no-useless-return': 'error',
        'semi': 'error',
        'space-in-parens': 'error',
        'object-curly-newline': [
            'error',
            {
                'ObjectExpression': {
                    'multiline': true,
                    'minProperties': 1
                },
                'ObjectPattern': 'never',
                'ImportDeclaration': 'never',
                'ExportDeclaration': 'never'
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-property-newline': 'error',
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': [
                    'directive',
                    'const',
                    'let',
                    'var',
                    'function',
                    'if'
                ],
                'next': '*'
            }, {
                'blankLine': 'any',
                'prev': [
                    'const',
                    'let',
                    'var'
                ],
                'next': [
                    'const',
                    'let',
                    'var'
                ]
            }
        ],
        'quotes': [
            'error',
            'single'
        ],
        'sort-imports': [
            'error',
            {
                'ignoreCase': true
            }
        ],
        'vars-on-top': 'error'
    }
};
