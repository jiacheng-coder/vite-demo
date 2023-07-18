# postCSS

- postCSS: 处理CSS的兼容性问题
- babel: 处理JS的兼容性问题

1. 对未来CSS属性的一些使用降级问题
2. 前缀补全：--webkit

例如，你可以使用 autoprefixer 插件自动为 CSS 属性添加浏览器前缀：
```
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

postcss可以包含less

我们的写的CSS代码（怎么爽怎么来） 
--> postcss 
-->【去将语法进行编译（嵌套语法，函数，变量）成原生css】 less sass等预处理器都可以以做 
--> 再次对未来的高级css语法进行降级 
--> 前缀补全
--> 浏览器客户端

我们写的JS代码（怎么爽怎么来） 
--> babel
--> 将最新的ts语法转换为js语法
--> 对JS的语法进一步做语法降级
--> 浏览器客户端

目前来说 Less和sass等一系列预处理器的postcss插件己经停止维护了 Less插件 你自己去用1ess和sass编译完了，然后你把编译结果给我

**所以业内就产生了一个新的说法：postcss是后处理器**
