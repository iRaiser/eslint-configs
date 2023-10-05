'use strict';

module.exports = {
    'extends': [
        'plugin:vue/vue3-recommended'
    ],
    'rules': {
        'vue/attributes-order': 'off',
        'vue/html-closing-bracket-newline': [
            'error',
            {
                'singleline': 'never',
                'multiline': 'never'
            }
        ],
        'vue/html-comment-indent': [
            'error',
            4
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                'selfClosingTag': 'always'
            }
        ],
        'vue/html-indent': [
            'error',
            4
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 0,
                'switchCase': 0
            }
        ]
    },
    'overrides': [
        {
            'files': [
                '*.vue'
            ],
            'rules': {
                'indent': 'off'
            }
        }
    ]
};
