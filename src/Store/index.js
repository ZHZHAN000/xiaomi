import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		arr:[],
		con:0
	},
	mutations:{

	},
	actions:{
		ADD_DATA(context,val){
			// console.log(val.id)
			// console.log(context.state.arr[0])
			// if(context.state.arr.includes(val.id)==false){
			// 	context.state.arr.push(val)
			// }else{
			// 	console.log(2)
			// }
			// if(context.state.arr.length==0){
				context.state.arr.push(val)
			// }else{
			// 	for(var i=0;i<context.state.arr.length;i++){
			// 		console.log(context.state.arr[i].id.includes(val.id))
			// 		var tf = context.state.arr[i].id.includes(val.id)
			// 		if(tf!=true){
			// 			context.state.arr.push(val)
			// 		}else{
			// 			break
			// 		}
			// 	}
			// }
			
			// for(var i in context.state.arr){
			// 	if(val.id!=context.state.arr[i]){
			// 		context.state.arr.push(val)
			// 	}
			// }
			// console.log(context.state.arr)
			
		},
		ADD_CON(context,val){
			context.state.con=val
		}
	},					
	getters:{
		
	}
})