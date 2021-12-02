module.exports = {
    'src/**/*{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
    'src/**/*{css,less,scss,vue}': ['stylelint --fix'],
    'src/**/*.{ts,tsx}': (filenames) => [`tsc -p tsconfig.json --noEmit`],
    'src/**/*.{vue}': (filenames) => [`vue-tsc -p tsconfig.json --noEmit`],
};