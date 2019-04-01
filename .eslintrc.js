// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        // 关闭语句强制分号结尾
        "semi": [0],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, { "max": 100 }],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
        "indent": [1, 8],
        "no-multi-spaces": 0, //不能用多余的空格
        "no-trailing-spaces": 0,
        "comma-spacing": 0, //逗号前后的空格
        "generator-star-spacing": 0, //生成器函数*的前后空格
        "object-curly-spacing": [0, "never"], //大括号内是否允许不必要的空格
        "semi-spacing": [0, { "before": false, "after": true }], //分号前后空格
        "space-before-blocks": [0, "always"], //不以新行开始的块{前面要不要有空格
        "space-before-blocks": [0, "always"], //不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
        "space-in-parens": [0, "never"], //小括号里面要不要有空格
        "space-infix-ops": 0, //中缀操作符周围要不要有空格
        "space-return-throw-case": 0, //return throw case后面要不要加空格
        "spaced-comment": 0, //注释风格要不要有空格什么的
    }
}