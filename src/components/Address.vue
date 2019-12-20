<template>
	<div class="address">
		<van-nav-bar title="收货地址" left-arrow @click-left="back">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<ul>
			<li v-for="(item,index) of list" :key="item.id">
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
				list:[
					{
					id: '1',
					name: "诸葛铁牛",
					tel: "13125896325",
					address: "北京 北京市 顺义区",
					addressDetail: "居馨花园1号楼，1单元，1201",
					isDefault:false
					}/*,
					{
						id: "2",
						name: localStorage.getItem("name"),
						tel: localStorage.getItem("tel"),
						address: localStorage.getItem("address"),
						addressDetail: localStorage.getItem("addressDetail"),
						isDefault:localStorage.getItem("isDefault")
					}*/
				]
			}
		},
		mounted(){
			this.init()
		},
		methods:{
			init(){
				if (localStorage.getItem("name") == null) {
					
				}else{
					var obj = {
						name: localStorage.getItem("name"),
						tel: localStorage.getItem("tel"),
						address: localStorage.getItem("address"),
						addressDetail: localStorage.getItem("addressDetail"),
						isDefault: localStorage.getItem("isDefault"),
					}
					this.list.push(obj)
				}
			},
			back(){
				this.$router.push('/mine')
			},
			onAdd(){
				this.$router.push('/newadd')
			},
			del(id){
				var f = confirm("是否确认删除");
				if (f) {
					this.list.splice(id,1)
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