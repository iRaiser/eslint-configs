'use strict';

module.exports = {
    'extends': [
        "plugin:vue/recommended"
    ],
    'rules': {
        "vue/attributes-order": "off",
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/html-comment-indent": [
            "error",
            4
        ],
        "vue/html-self-closing": "off",
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "never"
            }
        ],
        "vue/html-closing-bracket-spacing": [
            "error",
            {
                "selfClosingTag": "never"
            }
        ],
        "vue/max-attributes-per-line": "off",
        "vue/script-indent": [
            "error",
            4,
            {
                "baseIndent": 1
            }
        ]
    },
    "overrides": [
        {
            "files": [
                "*.vue"
            ],
            "rules": {
                "indent": "off"
            }
        }
    ]
};
