由于常年不在家，相信很多人在过年时候碰到眼熟的亲戚都不知道该怎么称呼了。由于工作生活节奏不同，如今很多关系稍疏远的亲戚之间来往并不多。因此放假回家过年时，往往会搞不清楚哪位亲戚应该喊什么称呼，很是尴尬。然而搞不清亲戚关系和亲戚称谓的不仅是小孩，就连年轻一代的大人也都常常模糊混乱。

“中国家庭称谓计算器”为你避免了这种尴尬，只需简单的输入即可算出称谓。输入框兼容了不同的叫法，你可以称呼父亲为：“老爸”、“爹地”、“老爷子”等等，方面不同地域的习惯叫法。快捷输入按键，只需简单的点击即可完成关系输入，算法还支持逆向查找称呼哦～！

借助这套算法结合react native开发的APP: [http://passer-by.com/relationship/app.html](http://passer-by.com/relationship/app.html)


## 一、下载 & 安装

该 Javascript 库 / 模块可以用于前端也可以用于后端 Nodejs 中。

1. 直接下载dist/relationship.min.js，然后使用 `<script>`标签引入，可以得到全局的方法 `relationship`.
2. 使用 npm 进行包管理，具体为：

	> **npm install relationship.js**

然后使用 `require` 引入模块

```js
var relationship = require("relationship.js");
```


## 二、使用

使用很简单，只有一个 API 方法 `relationship(options)`.

```js
var options = {text:'儿子的爸爸的妈妈',sex:1};
relationship(options);
```

另外，参数`options`结构为：

```js
var options = {
	text:'',
	sex:-1,
	type:'default',		//为'chain'时,reverse无效
	reverse:false
};
```


## 三、开发 & 贡献

```sh
# 安装开发依赖
npm install 

# build 模块: 将 relationship 打包压缩
npm run build

# 执行测试用例（可以在tests/test.js中完善测试用例）
npm test
```

当然也可以直接浏览器打开 `index.html` 来在查看网页demo。


## 四、其他

他们都在用：

查询网 http://ip138.com/

在线查询网 http://qinshu.supfree.net/

在线工具 http://atool.org/
