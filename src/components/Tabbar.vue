<template>
	<div>
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
		  <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
		  <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
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
