// 1、在标准函数中，this 引用的是把函数当成方法调用的上下文对象（在全局上下文中 this 指向 window/global）。
// 2、在箭头函数中，this 引用的是定义箭头函数的上下文
// 3、call、apply、bind 强制指定 this
// 4、new 关键词，this 指向 new 创建的对象

问题：Node 环境的 this 为什么指向到 module.exports
