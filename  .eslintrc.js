module.exports = {
    env: {
        node: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {}
}
