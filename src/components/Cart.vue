<template>
    <div class="cart">
        <header>
        	<van-nav-bar title="购物车" fixed>
        		<van-icon name="arrow-left" slot="left" size=".32rem" @click="fn" color="#666666"/>
				<van-icon name="search" slot="right" size=".32rem" color="#666666"/>
			</van-nav-bar>
        </header>
        <div class="con_top">
        	<p>登录后享受更多优惠  <span>去登录></span></p>
        </div>
        <div class="con_bottom">
        	<img src="../assets/img/1.jpg" alt="" style="width: 100%">
        	<van-divider :style="{ color: '#8B8B8B', borderColor: '#8B8B8B', padding: '0 16px' }">
  			实时推荐你的心心念念
			</van-divider>
			<section>
				<div v-for="(item,index) of arr" :key="item.id">
					<img :src="item.img" alt="">
					<h3>{{ item.name }}</h3>
					<p>{{ item.content }}</p>
				</div>
			</section>
        </div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			arr:[]
		}
	},
    methods:{
    	fn(){
    		this.$router.push('/home')
    	}
    },
    mounted(){
    	this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
    	.then(res=>{
    		console.log(res.data)
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
	.con_bottom{
		background: #F5F5F5;
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
	}
	.con_bottom>section>div>h3{
		font-size: .28rem;
		margin-bottom: .1rem;
		margin-left: .18rem;
	}
	.con_bottom>section>div>p{
		font-size: .18rem;
		margin-left: .18rem;
	}
</style>