<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in msg" :key="item.img">
      <img :src="item.img" alt="">
    </mt-swipe-item>
  </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                  </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                  </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                  </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                  </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                  </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                  </a></li>
		        </ul> 
</div>
</template>

<script>

import { Toast } from 'mint-ui';
export default{
    data(){
        return{
           msg:[]
        }
    },
    created(){
     this.getlist()
    },
    methods:{
       getlist(){
           this.$http.get("http://027xin.com:8899/api/getlunbo").then(result=>{
               
               if(result.body.status==0){
                   this.msg = result.body.message
               }else{
                 toast("加载图片失败")
               }
           })
       }
    }
}


</script>
 
 <style lang="scss" scoped>
   .mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: skyblue;
      
    }
    &:nth-child(2) {
      background-color: pink;
    }
    &:nth-child(3) {
      background-color: cornflowerblue;
    }
    img{
      height: 100%;
      width: 100%;
   }
  }
}
.mui-table-view {
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;

  }
  .mui-media-body{
    font-size: 13px;
    
  }
}
.mui-table-view-cell{
  border: 0;
}
</style>


