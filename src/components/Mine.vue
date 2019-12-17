<template>
	<div class="mine">
		<header>
			<div class="cir"></div>
			<p>154548787</p>
		</header>
		<div class="order">
			<p>我的订单</p>
			<h2>全部订单></h2>
		</div>
		<nav>
			<van-grid :border="false" :column-num="3">
				<van-grid-item>
					<van-icon name="shopping-cart-o" size=".4rem"/>
					<p>待付款</p>
				</van-grid-item>
				<van-grid-item>
					<van-icon name="coupon-o" size=".4rem"/>
					<p>优惠券</p>
				</van-grid-item>
				<van-grid-item>
					<van-icon name="star" size=".4rem"/>
					<p>收藏</p>
				</van-grid-item>
			</van-grid>
		</nav>
		<ul>
			<li>
				<van-icon name="like-o" color="#FF6600" size=".42rem"/>
				<p class="p">会员中心
					<span>></span>
				</p>
			</li>
			<li>
				<van-icon name="location-o" color="#FF6600" size=".42rem"/>
				<p>收货地址
					<span>></span>
				</p>
			</li>
		</ul>
		<ul>
			<li>
				<van-icon name="coupon-o" color="#FF6600" size=".42rem"/>
				<p class="p">我的优惠
					<span>></span>
				</p>
			</li>
			<li>
				<van-icon name="comment-o" color="#FF6600" size=".42rem"/>
				<p>我的意见
					<span>></span>
				</p>
			</li>
		</ul>
		<ul>
			<li>
				<van-icon name="clock-o" color="#FF6600" size=".42rem"/>
				<p>浏览记录
					<span>></span>
				</p>
			</li>
		</ul>
		<ul>
			<li>
				<van-icon name="qr" color="#FF6600" size=".42rem"/>
				<p>我的名片
					<span>></span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    data(){
    	return{

    	}
    }
}
</script>

<style scoped>
	.mine{
		height: 100vh;
		background: #F5F5F5;
	}
	header{
		width: 100%;
		height: 1.4rem;
		background: #F37D0F;
	}
	header>.cir{
		width: .82rem;
		height: .82rem;
		margin-left: .28rem;
		margin-top: .26rem;
		border-radius: 50%;
		border: 6px solid #F8B16F;
		float: left;
	}
	header>p{
		font-size: .25rem;
		color: #fff;
		line-height: 1.4rem;
		float: left;
		margin-left: .2rem;
	}
	.order{
		width: 100%;
		height: .85rem;
		background: #fff;
		border-bottom: 1px solid #D9D9D9;
	}
	.order>p{
		font-size: .28rem;
		line-height: .85rem;
		margin-left: .28rem;
		float: left;
	}
	.order>h2{
		font-size: .22rem;
		line-height: .85rem;
		float: right;
		margin-right: .2rem;
	}
	nav{
		width: 100%;
		height: 1.7rem;
		background: #fff;
		margin-bottom: .2rem;
	}
	nav .van-grid{
		height: 1.2rem;
	}
	nav .van-grid p{
		font-size: .22rem;
		text-align: center;
	}
	nav >>> .van-grid-item__content{
		height: 100%;
		padding-top: .5rem;
	}
	.van-icon{
		margin-bottom: .14rem;
	}
	ul{
		width: 100%;
		background: #fff;
		margin-bottom: .22rem;
	}
	ul>li{
		width: 100%;
		height: .88rem;
	}
	ul>li>.van-icon{
		margin-left: .3rem;
		line-height: .88rem;
	}
	ul>li>.p{
		border-bottom: .02rem solid #D9D9D9;
	}
	ul>li>p{
		width: 5.45rem;
		height: 100%;
		font-size: .34rem;
		line-height: .88rem;
		float: right;
	}
	ul>li>p>span{
		float: right;
		margin-right: .24rem;
	}
</style>