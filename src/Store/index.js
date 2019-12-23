import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


var arr = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
	state:{
		arr:arr
	},
	mutations:{

	},
	actions:{
		ADD_DATA(context,val){
			var flag = false
			context.state.arr.some(item=>{
				if(item.id==val.id){
					item.value=Number(val.value)
					flag=true
					return true
				}
			})

			if(!flag){
				context.state.arr.push(val)
			}
			localStorage.setItem('car',JSON.stringify(context.state.arr))
		},
		REMOVE_ARR(context,id){
			context.state.arr.some((item,i)=>{
				if(item.id==id)
				context.state.arr.splice(i,1)
			})
			localStorage.setItem('car',JSON.stringify(context.state.arr))
		}
	},					
	getters:{
		ADD_NUM(state){
			var c = 0;
			state.arr.forEach(item=>{
				c+=Number(item.value)
			})
			return c
		},
		ADD_MONEY(state){
			var money =0;
			for(var i=0;i<state.arr.length;i++){
	   			money+=Number(state.arr[i].price)*state.arr[i].value
	   		}
	   		return money
		}
	}
})