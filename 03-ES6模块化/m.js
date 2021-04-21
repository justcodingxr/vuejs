import {flag} from "./a.js";
import {sum} from "./a.js";
import {num1,num2} from "./a.js";
import {mut,Person,Person2} from "./a.js";
//导出所有import * as a from "./a.js";
//不加{}默认是default引入
import n from "./a.js";
if(flag){
  console.log(sum(20,10))
  console.log(sum(num1,num2))
  console.log(mut(2,9))

}

const p=new Person()
p.run()

const p2=new Person2()
p2.walk()
console.log(n)