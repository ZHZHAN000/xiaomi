<template>
	<div>
	<van-nav-bar title="分类"  left-arrow fixed>
	  <van-icon name="search" slot="right" />
	</van-nav-bar>
	<div class="wrapper">
		<ol>
			<li v-for="(item,index) in items" class="" >{{item.text}}</li>
		</ol>
		<div class="righe">
			<div class="plate" v-for="(item,index) in items">
		    	<div>
		    		<img src="../assets/img/分类_r1_c1.png" alt="">
		    	</div>
		    	<p><span>{{item.text}}</span></p>
		    	<ul>
		    		<li>
		    			<div>
		    				<img src="../assets/img/分类_r2_c2.png" alt="">
		    			</div>
		    			<p>小米9</p>
		    		</li>
		    		<li>
		    			<div>
		    				<img src="../assets/img/分类_r2_c2.png" alt="">
		    			</div>
		    			<p>小米9</p>
		    		</li>
		    		<li>
		    			<div>
		    				<img src="../assets/img/分类_r2_c2.png" alt="">
		    			</div>
		    			<p>小米9</p>
		    		</li>
		    		<li>
		    			<div>
		    				<img src="../assets/img/分类_r2_c2.png" alt="">
		    			</div>
		    			<p>小米9</p>
		    		</li>
		    	</ul>
		    	<div>查看更多</div>
		    </div>
		    <img src="../assets/img/分类_r3_c3.png" alt="">
		</div>
	</div>
	</div>
</template>

<script type="text/javascript">
import "../assets/js/jquery-1.8.1.js"
	export default {
		data(){
			 return {
			       items: [{ text: '手机' },{ text: '电视' },{ text: '电脑' },{ text: '家电' },{ text: '路由' },{ text: '出现' },{ text: '出行' },{ text: '智能' },{ text: '灯具' },{ text: '家电' },{ text: '电脑' }]
			    }
		},
		methods:{
		
		},
		mounted(){
			//点击导航栏右侧滑动
			$("ol li").on('click',function(){
				var s = $(this).index()
				$(this).addClass("active").siblings().removeClass("active")
				$(".righe").animate({
					scrollTop:s*398.44
				},500,"linear")
			})

			var sco = 1;
			//默认导航栏第一个亮
			$("ol li").eq(0).addClass("active").siblings().removeClass("active")

			//滑动右侧左侧导航栏亮
			$(".righe").scroll(function(){
				var h = $(this).scrollTop()
				if(sco == 1){
					$(".plate").each(function(){
						var eq = $(this).index()
						var heig = eq * $(".plate").height()
						if(h > heig){
							$("ol li").eq(eq).addClass("active").siblings().removeClass("active")
						}

					})
				}
			})
		}
	}
</script>

<style type="text/css" scoped>
	.wrapper{
		width: 100%;
		margin-top: 0.8rem;
		position: relative;
	}
	ol{
		position: absolute;
		top:0;
		left: 0;
		height: 9.8rem;
	}
	ol>li{
		width: 1.55rem;
		padding: 0.28rem 0.37rem 0.28rem 0.44rem;
		font-size: 0.32rem;
		color:#66666B;
	}
	.righe{
		overflow: scroll;
		height:100vh;
		margin-bottom: 0.8rem;
	}
	.righe>img{
		width: 4.85rem;
		height:2.8rem;
		float: right;
	}
	 .plate{
	 	width: 4.85rem;
    	height: 6.8rem;
    	padding: 0.2rem;
    	float: right;
    	background: #fff;
    }
    .plate>div:first-of-type{
		width: 4.34rem;
		height: 1.54rem;
		margin-bottom: 0.24rem;
    }
    .plate>div:first-of-type>img{
    	width: 4.35rem;
    	height: 1.54rem;
    }
    .plate>p{
    	width: 1.63rem;
    	height: 0.03rem;
    	background: #E0E0E0;
    	margin: 0 auto;
    	position: relative;
    	margin-bottom: 0.56rem;
    }
    .plate>p>span{
    	width: 0.94rem;
    	height: 0.36rem;
    	background: #fff;
    	margin: 0 auto;
    	text-align: center;
    	position: absolute;
    	top:-0.18rem;
    	left: 0.34rem;
    	font-size: 0.3rem;
    }
    .van-sidebar-item--select{
    	border:none;
    	border-right:3px solid #ee0a24;
    }
    ul{
    	width: 4.4rem;
    	height: 3.13rem;
    }
    ul>li{
    	width: 1.42rem;
    	height: 1.49rem;
    	float: left;
    }
    ul>li>div{
    	width: 0.68rem;
    	height: 0.82rem;
    	margin: 0 auto;
    	margin-bottom: 0.2rem;
    }
    ul>li>div>img{
    	width: 0.68rem;
    	height: 0.82rem;
    }
    ul>li>p{
    	font-size: 0.16rem;
    	color: #757575;
    	width: 1.42rem;
    	text-align: center;
    }
    .plate>div:last-of-type{
    	width: 4.36rem;
    	height: 0.69rem;
    	background: #F9F5E6;
    	font-size: 0.35rem;
    	color:#AEA38D;
    	text-align: center;
    	line-height: 0.69rem;
    }
    .active{
		border-right: 0.03rem solid red;
		background: #fff;
	}
</style>