<template>
	<div>
	<van-nav-bar title="分类"  left-arrow fixed>
	  <van-icon name="search" slot="right" />
	</van-nav-bar>
	<van-tree-select
	  height="100%"
	  :items="items"
	  :main-active-index.sync="activeIndex"
	>
	  <template slot="content">
	    <!-- <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
	    <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" /> -->
	    <div class="plate">
	    	<div></div>
	    	<!-- <p><h1>手机</h1></p> -->
	    	
	    </div>
	  </template>
</van-tree-select>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			 return {
			      activeIndex: 0,
			      items: [{ text: '手机' },{ text: '电视' },{ text: '电脑' },{ text: '家电' },{ text: '路由' },{ text: '出现' },{ text: '出行' },{ text: '智能' },{ text: '灯具' },{ text: '家电' },{ text: '电脑' },]
			    }
		}
	}
</script>

<style type="text/css" scoped>
	.van-icon-search:before{
		color:#666666;
	}
	.van-icon-arrow-left:before{
		color:#666666;
	}
	.van-nav-bar{
		background: #F2F2F2;
		position: relative;
		top:0;
		left: 0;
	}
	.van-tree-select__nav-item {
    padding: 20px 8px 20px 12px;
    }
    .plate{
    	width: 100%;
    	height: 6.8rem;
    	padding: 0.2rem;
    }
    .plate>div{
		width: 4.35rem;
		height: 1.54rem;
		margin-bottom: 0.24rem;
    }
    .plate>p{
    	width: 1.63rem;
    	height: 0.03rem;
    	background: #E0E0E0;
    	margin: 0 auto;
    	position: relative;
    }
    .plate>p>h1{
    	width: 0.94rem;
    	height: 0.36rem;
    	background: #fff;
    	margin: 0 auto;
    	text-align: center;
    	position: absolute;
    	top:-0.18rem;
    	left: 0.34rem;
    }
</style>