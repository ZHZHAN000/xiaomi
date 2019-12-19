<template>
	<div>
		<van-tabbar v-model="active" fixed route>
			<van-tabbar-item icon="wap-home-o" to="/home" size=".32rem">首页</van-tabbar-item>
			<van-tabbar-item icon="qr" to='/classify'>分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
			<van-tabbar-item icon="manager-o" to='/mine'>个人</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				active: 0
			}
		}
	}
</script>

<style type="text/css" scoped>
	.van-tabbar{
		height: .8rem;
	}
	div >>> .van-tabbar-item__icon{
		font-size: .3rem;
	}
	div >>> .van-tabbar-item{
		font-size: .2rem;
	}
</style>
