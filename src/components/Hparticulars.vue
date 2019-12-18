<template>
    <div class="hparticulars">
        <!-- 返回上一页面 -->
        <header @click="fn">
            <van-icon name="replay" size="0.5rem"/>
        </header>
        <!-- 轮播图 -->
        <div class="tu">
            <van-swipe :autoplay="3000" class="swiper">
                <van-swipe-item v-for="(image, index) in images" :key="index" >
                    <img :src="image.img" @click="Preview_img(images,index)" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 详情内容 -->
        <div class="xiang">
            <h2>{{item.name}}</h2>
            <p>{{item.info}}</p>
            <span>￥{{item.price}}</span>
            <div>
                <div class="top" @click="show = true">
                    <div class="zuo">已选</div>
                    <div class="zhong" >
                        <p>{{item.name}}</p>
                        <p v-for="item in item.edition" :key="item.id">{{item.Memory}}</p>
                    </div>
                    <div class="you">
                        <van-icon name="arrow" size="0.3rem"/>
                    </div>
                </div>
                <div class="bottom">
                    <div class="zuo">送至</div>
                    <div class="zhong" >北京</div>
                    <div class="you">
                        <van-icon name="arrow" size="0.3rem"/>
                    </div>
                </div>
            </div>
        </div>
         <!-- 详情图 -->
        <img v-for="item in item.info_img" :key="item.id" :src="item.img" class="datu">
        <!-- 底部加入购物车 -->
        <van-goods-action>
            <van-goods-action-icon icon="wap-home-o" text="首页" @click="fn1"/>
            <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click="fn2"/>
            <van-goods-action-button type="warning" text="加入购物车" size="2.56rem"  @click="show = true"/>
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <!-- 弹出页面 -->
        <!-- 蒙版 -->
        <div class="meng" v-show="show">
            <div class="bai">
                <p @click="show = false">X</p>
                <img src="" alt="">
            </div>
        </div>
      </div> 
</template>

<script>
export default {
    data(){
        return{
            item:this.$route.query.item,
            images:this.$route.query.item.imgList,
            show: false,
        } 
    },
    methods:{
        // 后退返回上一页面
        fn(){
            this.$router.go(-1);
        },
        // 跳转到首页
        fn1(){
            this.$router.push('/home')
        },
        // 跳转到购物车页面
        fn2(){
            this.$router.push('/cart')
        },
    },
    mounted(){
        console.log(this.item)
    }
}
</script>

<style scoped>
    header{
        position: fixed;
        left:0.26rem;
        top:0.34rem;
        z-index: 1;
    }
    .tu{
        width:100%;
        height: 7.04rem;
    }
    .tu img{
        width:100%;
        height: 7.04rem;
    }
    .xiang{
        background: #fff;
        width: 100%;
        height:4.17rem;
        overflow: hidden;
        padding: 0 0.28rem 0 0.28rem;
    }
    .xiang>h2{
        font-size: 0.42rem;
        margin-top:0.38rem;
    }
    .xiang>p{
        font-size: 0.22rem;
        color:#757575;
    }
    .xiang>span{
        color:#FF6700;
        font-size: 0.3rem;
    }
    .xiang>div{
        width:100%;
        height:1.66rem;
        background: #FAFAFA;
        border-radius: 0.2rem;
        margin-top: 0.1rem;
    }
    .xiang>div>.top{
        width:100%;
        height:0.84rem;
        border-bottom: 1px solid #CCCCCC;
        overflow: hidden;
    }
    .xiang>div>.top>.zuo{
        margin:0.3rem 0.3rem 0 0.3rem;
        font-size: 0.22rem;
        color:#737373;
        float: left;
    }
    .xiang>div>.top>.zhong{
        font-size: 0.22rem;
        margin:0.3rem 0 0 0;
        float: left;
    }
    .xiang>div>.top>.zhong>p{
        display: inline;
    }
    .xiang>div>.top>.you{
        margin:0.3rem 0.24rem 0 0;
        float: right;
    }
    .xiang>div>.bottom{
        width:100%;
        height:0.84rem;
        border-bottom: 1px solid #CCCCCC;
        overflow: hidden;
    }
    .xiang>div>.bottom>.zuo{
        margin:0.3rem 0.3rem 0 0.3rem;
        font-size: 0.22rem;
        color:#737373;
        float: left;
    }
    .xiang>div>.bottom>.zhong{
        font-size: 0.22rem;
        margin:0.3rem 0 0 0;
        float: left;
    }
    .xiang>div>.bottom>.you{
        margin:0.3rem 0.24rem 0 0;
        float: right;
    }
    .van-cell{
        background: #FAFAFA;
    }
    .datu{
        width:100%;
    }
    .meng{
        width:100%;
        height:100vh;
        background: rgba(0,0,0,0.5);
        z-index: 20;
        position: fixed;
        left:0;
        top:0;
    }
    .bai{
        width:100%;
        height:8.53rem;
        background: #fff;
        border-radius: 0.3rem 0.3rem 0 0 ;
        position: fixed;
        left:0;
        bottom:0;
    }
    .bai>p{
        font-size:0.3rem;
        position: absolute;
        right:0.29rem;
        top:0.31rem;
    }
</style>