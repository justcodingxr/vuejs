var name='小明'
var flag=true
var age=18

function sum(num1,num2){
  return num1+num2
}

if(flag){
  console.log(sum(20,30))
}
//对象导出方式1
export{flag,sum}
//到处方式2
export var num1=3
export var num2=6
//导出函数和类
export function mut(a,b){
  return a*b
}
//导出ES6 class
export  class Person{
  run(){
    console.log('runing')
  }
}
class Person2{
  walk(){
    console.log('walking')
  }
}
export {Person2}
//export default只定义一个引用可以自己命名,导出函数类似
export default name='ling'