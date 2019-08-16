<template>
  <div class="main">
    <div class="content-wrapper">
      <div class="top">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561461042381&di=3a3d8bc9a2dcbd68a25533333f1b47e3&imgtype=0&src=http%3A%2F%2Fp4.music.126.net%2FxyulCxff_zd90BTkVI-Q9Q%3D%3D%2F6672936069769902.jpg%3Fparam%3D180y180"
          width="64"
          height="64"
          alt=""
        >
        <div class="centent">
          <h4>{{data.seller.name}}</h4>
          <p>{{data.seller.description}}/{{data.seller.deliveryTime}}分钟送达</p>
          <p>{{data.seller.supports[0].description}}</p>
        </div>
        <span @click="showdetail" class="span-right">{{data.seller.supports.length}}个 ></span>
      </div>
      <div class="footer" @click="showdetail">
        <p>{{data.seller.bulletin}}</p>
      </div>
    </div>
    <div class="background">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt=""
        width="100%" height="100%"
        >
    </div>
    <div v-if="isshow" class="detail">
        <div class="detail-wrapper clearfix">
            <div class="detail-main">
                <h1>{{data.seller.name}}</h1>
                <div class="star-wrapper">
                    
                </div>
                <div class="title">
                    <div class="line"></div>
                    <div class="text">优惠信息</div>
                    <div class="line"></div>
                </div>
                <ul>
                    <li><img src="../../static/image/decrease_1@2x.png" height="15" width="15" alt=""><span>{{data.seller.supports[0].description}}</span></li>
                    <li><img src="../../static/image/discount_1@2x.png" height="15" width="15" alt=""><span>{{data.seller.supports[1].description}}</span></li>
                    <li><img src="../../static/image/special_1@2x.png" height="15" width="15" alt=""><span>{{data.seller.supports[2].description}}</span></li>
                    <li><img src="../../static/image/invoice_1@2x.png" height="15" width="15" alt=""><span>{{data.seller.supports[3].description}}</span></li>
                    <li><img src="../../static/image/guarantee_1@2x.png" height="15" width="15" alt=""><span>{{data.seller.supports[4].description}}</span></li>
                </ul>
                <div class="title">
                  <div class="line"></div>
                  <div class="text">商家公告</div>
                  <div class="line"></div>
                </div>
                <p>{{data.seller.bulletin}}</p>
            </div>
        </div>
        <div class="detail-close">
          <span @click="showdetail" class="icon-close">x</span>
        </div>
    </div>
  </div>
</template>

<script>
import Data from "../../data.json";
export default {
  name: "vheader",
  data() {
    return {
      data: Data,
      isshow:false,
    };
  },
  methods:{
    showdetail(){
      this.isshow=!this.isshow;
    }
  }
};
</script>


<style lang="less" scoped>
.main {
//   height: 130px;
  width: 100vw;
  background: rgba(7, 17, 27, 0.5);
  position: relative;
  color: #fff;
  .content-wrapper {
        font-size: 15px;
        width: 100vw;
        position: relative;
        display: flex;
    //   background: rgba(7, 17, 27, 0.5);
        flex-direction: column;
        margin: 0 auto;
        padding: 15px 0 0 0;
        .top{
            width: 90vw;
            margin: 0 auto;
            h4{
                font-size: 18px;
            }
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            img{
                width: 65px;
                height: 65px;
                padding-right: 15px;
            }
            .centent{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                
            }
        }
        .footer{
            // width: 90vw;
            // margin: 0 auto;
            margin-top: 15px;
            // height: 10px;
            padding: 6px 20px;
            // background-color: #eee;
            background: rgba(7,17,27,0.2);
            p{
                height: 15px;
                overflow: hidden;
                line-height: 15px;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .span-right{
            position: absolute;
            color: #fff;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 15px;
            right: 15px;
            font-size: 13px;
            bottom: 45px;
            background: rgba(7, 17, 27, 0.5); 
        }
  }
  .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
      filter: blur(5px);
  }
  .detail{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7,17,27,0.8);
      .detail-wrapper{
        // width:100%;
        // height:100%;
        min-height: 100%;
        .detail-main{
          width:80%;
          margin:0 auto;
          margin-top:64px;
          padding-bottom: 64px;
          h1{
            text-align: center;
            font-size:18px;
          }
          .star-wrapper{
            height:60px;

          }
          .title{
            width:100%;
            padding:15px 0; 
            font-size:16px;
            font-weight: 500px;
            display:flex;
            flex-direction:row;
            flex-wrap:nowrap;
            justify-content:center;
            align-items: center;
            .line{
              flex:1;
              height:1px;
              // background-color:#fff;
              background-color:#eee;
            }
            .text{
              padding:0 10px;
            }
          }
          li{
            padding:5px 0;
            display:flex;
            flex-direction:row;
            flex-wrap:nowrap;
            // justify-content:center;
            align-items:center;
            span{
              padding-left: 10px;
            }
          }
          p{
            padding: 0 12px;
            line-height:24px;
            font-size:12px;
          }
        }
      }
      .detail-close{
        // font-family: 'icomoon'!mportant;

        position:relative;
        width:32px;
        height: 32px;
        margin:-64px auto 0 auto;
        clear: both;
        font-size:30px;
        color:#fff;
        font-style: normal;
        
      }
  }
  .clearfix{
    display:inline-block;
    .clearfix:after{
      display:block;
      content: '.';
      height: 0;
      width: 0;
      line-height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
</style>
