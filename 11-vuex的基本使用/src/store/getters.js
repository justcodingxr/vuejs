export default {
  more20stu(state){
    return state.student.filter(s=> s.age>=20)
  },

  more20stulength(state,getters){
    return getters.more20stu.length
  },
  incrementCount(state,payloader){
    state.counter =  state.counter+payloader.m;
  }
}
