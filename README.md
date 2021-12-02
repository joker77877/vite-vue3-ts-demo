# Vue 3 + Typescript + Vite

## 代码规范


eslint规范地址(airbnb)：https://github.com/airbnb/javascript

style规范地址：https://github.com/stylelint-scss/stylelint-config-standard-scss

typescript-eslint规范地址：https://typescript-eslint.io/rules/type-annotation-spacing


## 文件命名规范

1.文件夹名称统一用kebab-case格式，例如user-info

2.组件文件用PascalCase方式命名，例如GridConfig.vue

3.其他所有文件用camelCase方式命名，例如workOrder.ts

## 优秀的书写习惯

1.常量都放在constant文件夹中，常量用全大写加下划线组成，例如
```
const USER_INFO = [{name: 'a', value: 1}];
```