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
                <div class="top" @click="addobj">
                    <div class="zuo">已选</div>
                    <div class="zhong" >
                        <p>{{content.name }} {{ content.edition[sub].Memory}} {{ content.edition[sub].color[sub1].color_list }}</p>
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
            <van-goods-action-button type="warning" text="加入购物车" size="2.56rem"  @click="addobj"/>
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <!-- 弹出页面蒙版 -->
        <div class="meng" v-show="show">
            <!-- 加入购物车 -->
            <div class="bai">
                <p @click="show = false">X</p>
                <div class="da">
                    <div class="shang">
                        <!-- <img src="">
                        <span>￥</span>
                        <p></p> -->
                        <img :src=" content.edition[sub].color[sub1].img ">
                        <span>￥{{content.edition[sub].edition_price}}</span>
                        <p>{{content.name }} {{ content.edition[sub].Memory}} {{ content.edition[sub].color[sub1].color_list }}</p>
                    </div>
                    <div class="zj">
                        <p>版本</p>
                        <div v-for="(item,i) in content.edition" :key="item.id" @click="color(i)" :class="{act:sub==i}">
                            <p>{{ item.Memory}}</p>
                            <span>￥{{ item.edition_price }}</span>
                        </div>
                    </div>
                    <div class="xia">
                        <p>颜色</p>
                        <div v-for="(item,i) in content2.color" :key="item.id" @click="color2(i)" :class="{active:sub1==i}">{{ item.color_list }}</div>
                    </div>
                </div>
                <div class="mai">
                    <p>购买数量</p>
                    <van-stepper v-model="value" />
                </div>
                <div class="jia">加入购物车</div>
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
            // 蒙版显示隐藏
            show: false,
            // 步进器
            value: 1,
            content:{},
            content2:{},
            sub:0,
            sub1:0,
            // colorFlag:0,
            // colorFlag2:0
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
        // 点击变颜色
        color(i){
            this.sub=i
            this.content2=this.content.edition[i]
        },
        color2(i){
            this.sub1=i
        },
        addobj(){
            this.content=this.item
            // console.log(this.content)
            this.show = true
        }
    },
    mounted(){
        // addobj()
        this.content=this.item
        this.content2=this.content.edition[this.sub]
        // console.log(this.content.edition[this.sub])

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
    .da{
        width:100%;
        height:7rem;
    }
    .shang{
        width:100%;
        height:3.05rem;

    }
    .shang>img{
        width:1.67rem;
        height:1.67rem;
        margin: 0.89rem 0.14rem  0.45rem 0.29rem;
        border:0.02rem solid #CCCCCC;
        float: left;
    }
    .shang>span{
        font-size:0.33rem;
        margin-top:1.33rem;
        display: inline-block;
    }
    .shang>p{
        font-size: 0.26rem;
        margin-top:0.23rem;
    }
    .zj{
        width:100%;
        height:2.11rem;
    }
    .zj>p{
        font-size: 0.2rem;
        margin-left: 0.27rem;

    }
    .zj>div{
        width:5.82rem;
        height:0.58rem;
        margin:auto;
        border:0.02rem solid #ccc;
        margin-top:0.28rem;
    }
    .xia .active,.zj .act{
        border:0.02rem solid #F56600;
        color:#F56600;
    }
    .zj .act p,.zj .act span{
        color:#F56600
    }
    .zj>div>p{
        font-size: 0.2rem;
        color:#ccc;
        margin-left: 0.28rem;
        line-height: 0.58rem;
        float: left;
    }
    .zj>div>span{
        color:#ccc;
        float: right;
        font-size: 0.23rem; 
        line-height: 0.58rem;
        margin-right: 0.27rem;
    }
    .xia{
        width:100%;
        height:1.82rem;
    }
    .xia>p{
        margin-left:0.19rem;
        font-size: 0.2rem;
    }
    .xia>div{
        margin:0.38rem 0 0 0.5rem ;
        width:1.07rem;
        height:0.57rem;
        border: 0.01rem solid #CCCCCC;
        text-align: center;
        line-height: 0.57rem;
        font-size: 0.26rem;
        display: inline-block;
        color:#CCCCCC;
    }
    .bai>.mai{
        width: 100%;
        height:0.91rem;
    }
    .mai>p{
        float: left;
        margin:0.25rem 0 0 0.27rem;
    }
    .mai>.van-stepper{
        float: right;
        margin-right: 0.28rem;
        border:0.02rem solid #BBBBBB;
        border-radius: 0.05rem;
    }
    .bai>.jia{
        width:5.86rem;
        height:0.55rem;
        margin:auto;
        background: #FF6700;
        border-radius: 0.5rem;
        color:#fff;
        line-height: 0.55rem;
        text-align: center;
        font-size: 0.23rem;
    }
</style>