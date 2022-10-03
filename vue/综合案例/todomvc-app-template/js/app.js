(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	new Vue({
		el:'#app',
		data:{
			// todos 用于存储所有事项信息
			todos:[
				{id:1,title:'示例内容1',completed:true},
				{id:2,title:'示例内容2',completed:false},
				{id:3,title:'示例内容3',completed:true},
			]
		},
		methods:{
			//进行单位复数化处理
			// pluralize:function(){
			// 	return this.remaining===1?'item':'items'
			// }
			pluralize(word){
				return word + (this.remaining===1?'':'s')
			}
		},
		computed:{
			// 用于获取待办事项个数
			remaining(){
				// return this.todos.filter(todo=>!todo.completed).length;
				return this.todos.filter(function(todo){
					return !todo.completed
				}).length
			}
		}
	})
	

})(window);
