// 测试浏览器的指向
this.a = 1
console.log(this) // 在浏览器中全局的this指向window，在Node中全局this指向 exports
console.log(exports)
console.log(this === exports)

//测试箭头函数定义时this发生改变
const say = function () {
  const fn = () => {
    console.log(this)
  }
  fn()
}

const obj3 = {
  say
}
//fn被声明时的this指向发生变化，fn内部的this也跟随变化
obj3.say() // this指向obj3
say() // this指向global

//测试箭头函数定义处this不变，但调用处this变化
const fn4 = () => {
  console.log('fn4', this)
}

const say4 = function () {
  console.log('say4', this)
  fn4()
}
const obj4 = {
  say4
}
say4()
obj4.say4()
