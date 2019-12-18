<template>
	<div class="address">
		<van-nav-bar title="收货地址" left-arrow @click-left="back">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<!-- <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围" @add="onAdd" @edit="onEdit"/> -->
		<ul>
			<!-- <li>
				<div class="infor">
					<h3>诸葛铁牛</h3>
					<h2>13125896325</h2>
					<h4>删除</h4>
				</div>
				<aside>
					<h3>北京 北京市 顺义区</h3>
					<h2>居馨花园1号楼，1单元，1201</h2>
				</aside>
				<van-icon name="arrow" size=".22rem" color="#999999"/>
			</li> -->
			<li id="li" v-for="(item,index) of list" :key="item.id">
				<div class="infor">
					<h3>{{ item.name }}</h3>
					<h2>{{ item.tel }}</h2>
					<h4 @click="del(index)">删除</h4>
				</div>
				<aside>
					<h3>{{ item.address }}</h3>
					<h2>{{ item.addressDetail }}</h2>
				</aside>
				<van-icon name="arrow" size=".22rem" color="#999999"/>
			</li>
		</ul>
		<p @click="onAdd">新建地址</p>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				// list:this.$route.query.addList
				list:[
					{
					id: '2',
					name: localStorage.getItem("name"),
					tel: localStorage.getItem("tel"),
					address: localStorage.getItem("province") + " " + localStorage.getItem("city") + " " + localStorage.getItem("county"),
					addressDetail: localStorage.getItem("addressDetail"),
					isDefault:localStorage.getItem("isDefault")
					},
					/*{
					id: '2',
					name: this.$route.query.addList.name,
					tel: this.$route.query.addList.tel,
					address: this.$route.query.addList.address,
					addressDetail: this.$route.query.addList.addressDetail,
					isDefault:this.$route.query.addList.isDefault
					}*/
				]
			}
		},
		mounted(){
			console.log(this.list)
			var tel = localStorage.getItem("tel");
			tel = "" + tel;
			// replace()方法在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
			var tel1 = tel.replace(tel.substring(3,7), "****");
			this.list[0].tel = tel1;
			console.log(this.list[0].tel)
		},
		methods:{
			back(){
				this.$router.push('/mine')
			},
			onAdd(){
				this.$router.push('/newadd')
			},
			del(id){
				var ul = document.querySelector("ul");
				var li = document.querySelector("#li");
				console.log(id)
				var f = confirm("是否确认删除");
				if (f) {
					ul.removeChild(li)
				}
			}
		}
	}
</script>

<style type="text/css" scoped>
	.address{
		width: 100%;
		height: 100vh;
		background: #fff;
	}
	/* .van-nav-bar{
		background: #F2F2F2;
		height: .88rem;
	}
	.van-nav-bar .van-icon{
		color: #666666;
	}
	.van-nav-bar__title{
		line-height: .88rem;
	} */
	.van-tabbar{
		display: none;
	}
	ul>li{
		width: 6.02rem;
		height: 1.94rem;
		margin: .2rem auto;
		border: .02rem solid #EEEEEE;
	}
	ul>li>.infor{
		width: 5.64rem;
		height: .96rem;
		border-bottom: .01rem solid #EEEEEE;
		margin: 0 auto;
	}
	ul>li>.infor>h3{
		font-size: .28rem;
		float: left;
		color: #FF6A06;
		margin-left: .25rem;
		line-height: .96rem;
	}
	ul>li>.infor>h2{
		font-size: .28rem;
		color: #000;
		line-height: .96rem;
		margin-left: .58rem;
		float: left;
	}
	ul>li>.infor>h4{
		font-size: .26rem;
		color: #9A9A9A;
		line-height: .96rem;
		float: right;
		margin-right: .2rem; 
	}
	ul>li>aside{
		width: 4.7rem;
		height: .96rem;
		padding: .15rem 0;
		margin-left: .4rem;
		float: left;
	}
	ul>li>aside>h3{
		font-size: .24rem;
		color: #3C3C3C;
		line-height: .35rem;
	}
	ul>li>aside>h2{
		font-size: .24rem;
		color: #3C3C3C;
		line-height: .35rem;
	}
	ul>li>.van-icon{
		float: right;
		margin-right: .22rem;
		line-height: .96rem;
	}
	.address>p{
		width: 100%;
		height: .88rem;
		background: #FF6700;
		position: fixed;
		bottom: 0;
		z-index: 2;
		font-size: .25rem;
		color: #fff;
		line-height: .88rem;
		text-align: center;
	}
</style>