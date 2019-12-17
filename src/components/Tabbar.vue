<template>
	<van-tabbar v-model="active">
<<<<<<< HEAD
	  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
	  <van-tabbar-item icon="search">标签</van-tabbar-item>
	  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
	  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
=======
		<van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
		<van-tabbar-item icon="qr" to='/classify'>分类</van-tabbar-item>
		<van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
		<van-tabbar-item icon="manager-o" to='/mine'>个人</van-tabbar-item>
>>>>>>> zyf/xiaomi
	</van-tabbar>
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
