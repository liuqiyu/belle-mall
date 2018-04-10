# Belle go

### 前言

Belle go是一个电商网站【声明：部分功能仿照天猫】。前端采用vue为基础搭建的框架。


### 功能实现

* 首页
* mini购物车
  * 加入购物车
  * 删除商品
  
### 技术栈

`vue2` `vue-router` `vuex` `es6` `webpack` `iview` `less`

### 规范

* ESLint Airbnb ES6 base

### 文件结构

shopping-cart

```
├── build
├── config
├── dist         打包后文件
├── src          
    ├── assets   样式/字体/图片
        ├── css
             ├── base.less    基本样式
        ├── font
             ├── iconfont.css ...   阿里字体图标
        ├── images
    ├── components    组件
    ├── my-theme      定制主题
    ├── router        路由
    ├── store         vuex
    ├── utils         公有的工具
    ├── views
        ├── layout    布局
        ├── overview  首页
    ├── App.vue
    ├── main.js
├── static
    ├── images

```

### 浏览

* 效果

<img src="https://github.com/liuqiyu/shopping-cart/blob/master/blog/show-1.gif" width="365" height="619"/>

* 地址

[预览](https://liuqiyu.github.io/shopping-cart/dist/#/)

### License

MIT
