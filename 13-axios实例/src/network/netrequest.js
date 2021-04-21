import axios from "axios";

export function netrequest(config,fun1,fun2){
  //创建实例
  const instance1=axios.create({
    baseURL:'//123.207.32.32:8000',
    timeout:5000
  })
  //config  传url:'/home/multidata'
  instance1(config).then(res=>{
    fun1(res)
  }).catch(err=>{
    fun2(err)
  })
}

