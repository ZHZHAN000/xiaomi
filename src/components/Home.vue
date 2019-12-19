<template>
    <div class="home">
        <!-- 头部 -->
        <header>
            <div></div>
            <van-search placeholder="请输入搜索关键词" />
        </header>
        <!-- 轮播图 -->
        <div class="tu">
            <van-swipe :autoplay="3000" class="swiper">
                <van-swipe-item v-for="(image, index) in images" :key="index" >
                    <img :src="image" @click="Preview_img(images,index)" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- nav -->
        <nav>
            <van-row  style="height:0.78rem">
                <van-col span="5"><van-icon name="like-o" style="line-height:0.78rem" size="0.34rem"/></van-col>
                <van-col span="5"><van-icon name="like-o" style="line-height:0.78rem" size="0.34rem"/></van-col>
                <van-col span="4"><van-icon name="like-o" style="line-height:0.78rem" size="0.34rem"/></van-col>
                <van-col span="5"><van-icon name="like-o" style="line-height:0.78rem" size="0.34rem"/></van-col>
                <van-col span="5"><van-icon name="like-o" style="line-height:0.78rem" size="0.34rem"/></van-col>
            </van-row>
            <van-row>
                <van-col span="5">icom1</van-col>
                <van-col span="5">icom2</van-col>
                <van-col span="4">icom3</van-col>
                <van-col span="5">icom4</van-col>
                <van-col span="5">icom5</van-col>
            </van-row>
        </nav>
        <!-- 数据 -->
        <div class="neirong">
            <div class="xiaomi" v-for="item in arr" :key="item.id" @click="fn(item)">
                <img :src="item.img" alt="">
                <h2>{{ item.name}}</h2>
                <p>{{ item.content }}</p>
                <span>￥{{ item.price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 图片路径
            images:[
                "//i8.mifile.cn/v1/a1/d54b1a01-4657-80f7-abd4-cb3c5aab2341!720x360.webp",
                "//i8.mifile.cn/v1/a1/fe58be6d-ebee-81dc-96cd-6521ae325155!720x360.webp",
                "//i8.mifile.cn/v1/a1/7f2b76cc-64ee-6d1a-e2a5-ead23ccc615c!720x360.webp"
            ],
            arr:[]
        }
    },
    mounted(){
        //axios请求数据
        this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
        .then(res=>{
            // console.log(res)
            this.arr=res.data
        })
    },
    methods: {
        // 轮播图预览
        Preview_img(images, index) {
            ImagePreview({
                images: images,//图片数组
                showIndex: true,
                loop: false,
                startPosition: index
            })
        },
        fn(item){
            this.$router.push({
                path:'/hparticulars',
                query:{
                    item:item,
                }
            })
        }
    }
}
</script>

<style scoped>
    header{
        width:100%;
        height:1.11rem;
        background: #F2F2F2;
        overflow: hidden;
        position: fixed;
        left:0;
        top:0;
        z-index: 1;
    }
    header>div{
        width:0.68rem;
        height: 0.68rem;
        background: #87CEEB;
        margin:0.21rem 0 0 0.34rem;
        border-radius: 50%;
        float: left;
    }
    .van-search{
        float: right;
        width:3.84rem;
        height:0.47rem;
        margin:0.3rem 0.43rem 0 0 ;
        border:2px solid #E5E5E5;
        border-radius: 0.2rem;
        overflow: hidden;
    }
    .van-search__content--square{
        background: #fff;
        padding: 0;
    }
    .tu{
        width:100%;
        margin-top:1.11rem;
        height:3.2rem;
    }
    .tu img{
        width:100%;
        height:3.2rem;
    }
    nav{
        width:100%;
        height: 1.28rem;
        background: #fff;
        margin-bottom: 0.16rem;
    }
    .van-col{
        text-align: center;
    }
    .neirong{
        width:100%;
        margin-bottom: 0.85rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        background: #fff;
    }
    .xiaomi{
        width:3.16rem;
        height:4.43rem;
        margin-bottom: 0.27rem;
    }
    .xiaomi>img{
        width:3.16rem;
        height:3.16rem;
    }
    .xiaomi>h2{
        font-size: 0.29rem;
        color:#000;
        margin-top:0.23rem;
        margin-left:0.18rem;
    }
    .xiaomi>p{
        margin: 0.14rem 0 0 0.2rem;
        color:#757575;
        font-size: 0.21rem;
    }
    .xiaomi>span{
        color:#EA625B;
        margin: 0.12rem 0 0 0.2rem;
        font-size: 0.2rem;
    }
</style>