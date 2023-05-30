// 1、全局上下文中this指向window
console.log(this)

// 2、在全局上下文中调用的标准函数中，this 指向 window
function a1() {
  console.log('第一个this', this)
}
a1()

// 3、在通过对象调用的标准函数中，this 引用的是把函数当成方法调用的上下文对象(调用时确定)
const obj2 = {
  say: function () {
    console.log('第二个this', this)
  }
}
obj2.say()

// 4、在箭头函数中，this 引用的是定义箭头函数的上下文所指向的this（声明时确定）
const fn3 = () => {
  console.log('第三个this', this)
}

const obj3 = {
  say: function () {
    fn3()
  }
}
obj3.say()
