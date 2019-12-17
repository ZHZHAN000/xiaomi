<template>
	<div>
		<van-tabbar v-model="active" fixed >
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


<style scoped>
	.van-hairline--top-bottom{
		height: .85rem;
	}
	div >>> .van-tabbar-item__text{
		font-size: .16rem;
	}
	div >>> .van-tabbar-item__icon{
		font-size: .3rem;
	}
</style>