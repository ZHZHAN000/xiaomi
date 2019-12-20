<template>
	<div class="newadd">
		<van-nav-bar title="收货地址" left-arrow @click-left="back">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<van-address-edit
		:area-list="areaList"
		show-set-default
		show-search-result
		:search-result="searchResult"
		:area-columns-placeholder="['请选择', '请选择', '请选择']"
		@save="onSave"
		save-button-text="保存地址"
		@change-detail="onChangeDetail"/>
	</div>
</template>

<script type="text/javascript">
// 导入area.js文件数据
import AreaList from '../data/area.js';

export default {
	data() {
		return {
			areaList:AreaList,
			searchResult: [],
			addList:{
				/*"name":"",
				"tel": "",
				"address": "",
				"addressDetail":"",
				"isDefault":""*/
			}
		}
	},
	methods: {
		back(){
			this.$router.push('/address')
		},
		onSave(content) {
			localStorage.setItem("name",content.name);
			localStorage.setItem("tel",content.tel);
			localStorage.setItem("address",content.province + content.city + content.county);
			localStorage.setItem("addressDetail",content.addressDetail);
			localStorage.setItem("isDefault",content.isDefault);
			this.$router.push('/address')
		},
		onChangeDetail(val) {
			if (val) {
				this.searchResult = [{
					name: '黄龙万科中心',
					address: '杭州市西湖区'
				}];
			} else {
				this.searchResult = [];
			}
		}
	}
}
</script>

<style type="text/css" scoped>
	.newadd{
		width: 100%;
		height: 100vh;
		background: #fff;
	}
	.van-nav-bar{
		background: #F2F2F2;
		height: .88rem;
	}
	.van-nav-bar .van-icon{
		color: #666666;
	}
	.van-nav-bar__title{
		line-height: .88rem;
	}
	div >>> .van-address-edit__buttons{
		width: 100%;
		padding: 0;
		position: fixed;
		bottom: 0;
	}
	div >>> .van-button--danger{
		height: .9rem;
		font-size: .26rem;
		background: #FF6700;
		border:1px solid #FF6700;
	}
	div >>> .van-address-edit__buttons .van-button{
		margin-bottom: 0;
	}
</style>