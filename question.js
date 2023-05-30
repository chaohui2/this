function a(fn) {
  console.log(this, '第一个this')
  return function () {
    console.log(this, '第二个this')
    fn()
  }
}
let obj = {
  say: a(() => {
    console.log(this, '第三个this')
  })
}
obj.say()
