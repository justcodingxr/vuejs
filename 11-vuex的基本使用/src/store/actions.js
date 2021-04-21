export default {
  aUpdateInfo(context,payloader){
    setTimeout(()=>{
      context.commit('changeInfo')
      console.log(payloader)
      console.log(payloader.message)
      // console.log(payloader.fun())
      payloader.fun()
    },1000)
  }
}
