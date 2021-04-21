const app = new Vue({
  el:'#app2',
  data:{
    books:[{id:1,name:'算法导论',date:'2006-9',price:85,count:1},
      {id:2,name:'数学导论',date:'2007-9',price:25,count:2},
      {id:3,name:'英语导论',date:'2008-9',price:35,count:3},
      {id:4,name:'工程导论',date:'2016-9',price:25,count:4}]
  },


  methods:{
      getFinalPrice(price){
      return '￥'+price.toFixed(2)
    },

    add(index){
        this.books[index].count++;
        console.log('add'+index)
    },

    sub(index){
      this.books[index].count--;
    },

    remove(index){
      this.books.splice(index,1)

    }

  },


  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },

  computed:{
    //法1
    // totalPrice(){
    //   let c=0;
    //   for(let i=0;i<this.books.length;i++){
    //     c+=this.books[i].price*this.books[i].count
    //   }
    //   return c;
    // }

    //法2
    // totalPrice(){
    //   let c=0;
    //   for(let i in this.books){
    //     c+=this.books[i].price*this.books[i].count
    //   }
    //   return c;
    // }

    //法3，推荐
    totalPrice(){
      let c=0;
      for(let item of this.books){
        c+=item.price*item.count
      }
      return c;
    }

  }


})