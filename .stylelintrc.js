module.exports = {
    root: true,
    plugins: ['stylelint-scss'],
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
        'stylelint-config-recommended-vue',
    ],
    rules: {
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always-single-line',
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['include', 'mixin'],
            },
        ],
        'rule-empty-line-before': ['never'],
        'selector-class-pattern': '^([a-z][a-z0-9]*)((-|--|__)[a-z0-9]+)*$',
    },
};
