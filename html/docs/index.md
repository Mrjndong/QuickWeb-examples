# QuickWeb文档

## 简介

QuickWeb是一个基于Node.js的web框架，使用QuickWeb可以快速地搭建出web服务器环境，
使您专注于实现网站的功能，而不需要重复构建自己的web框架。

QuickWeb目前已基本实现了同类框架所具有的功能，如Cookie、Session、http缓存、路由、
中间件机制、文件渲染等。同时还实现了另外一些比较实用的功能：

* 注册虚拟目录

* 文件读写代理、缓存

* 自动注册路由处理程序

* 自动配置

您除了可以使用像Express、Connect这些框架那样的编程方式之外，可以尝试使用QuickWeb
中的自动管理机制。


## 安装QuickWeb

目前QuickWeb仍处于测试阶段，没有发布到npm中，你需要用Git直接下载QuickWeb的源码：

	git clone git://github.com/leizongmin/QuickWeb.git
	
QuickWeb需要依赖以下npm包：

* **formidable** 解析POST数据。项目地址：[https://github.com/felixge/node-formidable](https://github.com/felixge/node-formidable)

* **mustache** QuickWeb默认的模板引擎。项目地址：[http://mustache.github.com/](http://mustache.github.com/)

* **EventProxy.js** 事件代理。项目地址：[https://github.com/JacksonTian/eventproxy](https://github.com/JacksonTian/eventproxy)



## 编写最简单的QuickWeb程序

	// 载入QuickWeb模块并监听80端口
	require('QuickWeb').create();


## 基于QuickWeb的程序推荐的文件目录结构

在您的应用中，推荐您使用如下的文件目录结构：

* **html** 目录，用于存放网站的静态文件

* **tpl** 目录，用于存放模板文件

* **tmp** 目录，临时目录，POST上传文件时，保存在此位置

* **code** 目录，用于存放路由处理程序

* **init** 目录，用于存放初始化程序

* **error_page** 目录，用于存放出错页面

* **config** 目录，用于存放QuickWeb配置文件


## [静态文件服务](静态文件服务)

## [路由处理程序](路由处理程序)