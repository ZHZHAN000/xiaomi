<template>
    <div class="cart">
        <header>
        	<van-nav-bar title="购物车" fixed>
        		<van-icon name="arrow-left" slot="left" size=".32rem" @click="gotoHome" color="#666666"/>
				<van-icon name="search" slot="right" size=".32rem" color="#666666"/>
			</van-nav-bar>
        </header>
        <div class="con_top">
        	<p>登录后享受更多优惠  <span>去登录></span></p>
        	<section v-if="cartFlag===0">
        		<p>购物车是空的 </p>
        		<span @click="$router.push('/home')">去逛逛</span>
        	</section>
        	<div v-else>
	        	<div class="con" v-for="(item,index) in conarr">
	        		<img :src="item.img" alt="">
	        		<div>
	        			<h4>{{ item.name }}</h4>
	        			<p>￥{{ item.price }}</p>
	        			<van-stepper v-model="value" @plus="ar" @minus="js"/>
	        			<van-icon name="delete" size=".4rem" @click="del(index)"/>
	        		</div>
	        	</div>
        	</div>
        </div>
        <div class="con_bottom">
        	<img src="../assets/img/1.jpg" alt="" style="width: 100%">
        	<van-divider :style="{ color: '#8B8B8B', borderColor: '#8B8B8B', padding: '0 16px' }">
  			实时推荐你的心心念念
			</van-divider>
			<section>
				<div v-for="(item,index) of arr" :key="item.id">
					<img :src="item.img" alt="">
					<h3 class="van-ellipsis">{{ item.name }}</h3>
					<p class="van-ellipsis">{{ item.content }}</p>
					<span>￥{{ item.price }}</span>
				</div>
			</section>
        </div>
        <footer v-if="cartFlag!=0">
        	<div>
        		<p>共{{ con }}件 金额：</p>
        		<p><span>{{ money }}</span>元</p>
        	</div>
        	<p class="con" @click="$router.push('/home')">继续购物</p>
        	<p class="right">去结算</p>
        </footer>
    </div>
</template>

<script>
export default {
	data(){
		return{
			arr:[],
			conarr:[],
			cartFlag:0,
			value:4,
			con:0,
			money:0
		}
	},
    methods:{
    	// 回首页
    	gotoHome(){
    		this.$router.push('/home')
    	},
    	ar(){
    		this.money+=this.value*this.conarr[0].price
    	},
    	js(){
    		this.money=this.value*this.conarr[0].price
    	},
    	// 删除
    	del(i){
    		var f = confirm('确认要删除吗')
    		if(f){
    			this.conarr.splice(i,1)

    		}
    		if(this.conarr.length==0){
    			this.cartFlag=0
    		}
    	},
    	// 初始化
    	initialize(){
	   		// 接受本地存储的数据，判断数据是否为空
	    	// console.log(JSON.parse(localStorage.getItem('item')));
	    	var obj = JSON.parse(localStorage.getItem('item'))
	    	if(obj!=null){
	    		// 给购物车页面赋值
	    		for(var i =0 ;i<obj.length;i++){
	    			this.conarr.push(obj[i])
	    		}
				// console.log(this.conarr)
				// 单件商品的数量
		    	this.value=localStorage.getItem('val')
		    	this.money=this.value*this.conarr[0].price
	    	}

	    	// 显示或隐藏底部 1为显示
	    	if(obj!=null){
	    		this.cartFlag=1
	    		this.con=this.conarr.length
	   			this.money=this.value*this.conarr[0].price
	    	}else{
	    		this.cartFlag=0
	    	}
    	}
    },
    mounted(){
   		this.initialize()

    	// 推荐数据
    	this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
    	.then(res=>{
    		this.arr=res.data
    	})
    }
}
</script>

<style scoped>
	.cart{
		width: 100%;
		background: #fff;
	}
	header{
		width: 100%;
		height: .82rem;
		background: #F2F2F2;
	}
	header .van-nav-bar{
		height: .82rem;
		line-height: .82rem;
		background: #F2F2F2;
	}
	header .van-nav-bar__title{
		font-size: .29rem;
		color: #666666;
	}
	header .van-nav-bar__left{
		left: .16rem;
	}
	header .van-nav-bar__right{
		right: .16rem;
	}
	.con_top{
		width: 100%;
	}
	.con_top>p{
		height: 1.1rem;
		font-size: .28rem;
		line-height: 1.1rem;
		background: #fff;
		padding: 0 .26rem;
	}
	.con_top>p>span{
		font-size: .24rem;
		float: right;
		color: #666666;
	}
	.con_top>section{
		text-align: center;
		height: 1.18rem;
		background: #EBEBEB;
	}
	.con_top>section>p{
		line-height: 1.18rem;
		font-size: .22rem;
		display: inline-block;
		color: #C8C8C8;
	}
	.con_top>section>span{
		display: inline-block;
		width: 1.2rem;
		height: .42rem;
		font-size: .22rem;
		border: 1px solid #c8c8c8;
		color: #000;
		line-height: .42rem;
		text-align: center;
		margin-left: .16rem;
	}
	.con_top>div>.con{
		width: 100%;
		background: #fff;
		padding: .1rem .38rem;
		height: 2.3rem;
		display: flex;
	}
	.con_top>div>.con>img{
		float: left;
		width: 1.66rem;
		height: 1.86rem;
		margin-right: .18rem;
	}
	.con_top>div>.con>div{
		float: left;
		flex: 1;
	}
	.con_top>div>.con>div>h4{
		font-size: .22rem;
		color: #666666;
		margin-bottom: .18rem;
	}
	.con_top>div>.con>div>p{
		font-size: .18rem;
		color: #999999;
		mask-border-outset: .2rem;
		margin-bottom: .2rem;
	}
	.van-stepper{
		float: left;
	}
	.van-icon-delete{
		float: right;
		margin-top: .05rem;
	}
	div >>> .van-stepper__minus, div >>> .van-stepper__plus{
		width: .7rem;
		height: .6rem;
		font-size: .16rem;
	}
	div >>> .van-stepper__input{
		width: .7rem;
		height: .6rem;
		font-size: .26rem;
	}
	.con_bottom{
		background: #F5F5F5;
		margin-bottom: .85rem;
	}
	.van-count-down, .van-divider{
		font-size: .16rem;
		line-height: .26rem;
		margin-bottom: .25rem;
	}
	.con_bottom>section{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.con_bottom>section>div{
		width: 3.14rem;
		height: 4.6rem;
	}
	.con_bottom>section>div>img{
		width: 100%;
		height: 3.18rem;
		margin-bottom: .2rem;
	}
	.con_bottom>section>div>h3{
		font-size: .28rem;
		margin-bottom: .1rem;
		margin-left: .18rem;
	}
	.con_bottom>section>div>p{
		font-size: .18rem;
		margin-bottom: .1rem;
		margin-left: .18rem;
	}
	.con_bottom>section>div>span{
		font-size: .2rem;
		color: #EB625B;
		margin-left: .18rem;
		font-weight: bold;
	}
	footer{
		width: 100%;
		height: .85rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 2;
		display: flex;
	}
	footer>div,footer>p{
		flex: 1;
		text-align: center;
		line-height: .85rem;
		font-size: .22rem;
	}
	footer>div{
		color: #ccc;
		line-height: .35rem;
	}
	footer>div>p>span{
		font-size: .26rem;
		color: #FF5722;
		font-weight: bold;
	}
	footer>.con{
		background: #F4F4F4;
	}
	footer>.right{
		background: #FF6700;
		color: #fff;
	}
</style>