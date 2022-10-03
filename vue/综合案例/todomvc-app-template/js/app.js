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
			],
			// 存储新增输入框的数据
			newTodo:'',
			// 存储正在编辑的todo
			editingTodo:null,
			// 存储正在编辑todo的原始内容
			titleBeforeEdit:''

		},
		methods:{
			//进行单位复数化处理
			// pluralize:function(){
			// 	return this.remaining===1?'item':'items'
			// }
			pluralize(word){
				return word + (this.remaining===1?'':'s')
			},
			// 用于新增事项
			addTodo(){
				var value = this.newTodo.trim()
				if(!value){return};
				this.todos.push({id:this.todos.length+1,title:value,completed:false})
				// 清空输入框
				this.newTodo=''
			},
			// 用于删除单个事项
			removeTodo(todo){
				var index = this.todos.indexOf(todo)
				this.todos.splice(index,1)
			},
			// 用于删除已完成事项
			removeCompleted:function(){
				this.todos=this.todos.filter(todo=>{
					return !todo.completed
				})
			},
			// 用于触发编辑，保存相关信息
			editTodo(todo){
				this.editingTodo= todo;
				this.titleBeforeEdit= todo.title;
			}
		},
		computed:{
			// 用于获取待办事项个数 未完成的事项个数
			remaining(){
				// return this.todos.filter(todo=>!todo.completed).length;
				return this.todos.filter(function(todo){
					return !todo.completed
				}).length
			},
			// 用于设置全部切换选框状态
			// - 原始写法
			// allDone(){
			// 	return this.remaining===0
			// }
			// - 最新功能书写方式 点击上面的 全选下面的
			allDone:{
				get(){
					return this.remaining === 0
				},
				set(value){
					// value代表全部切换选框的状态
					this.todos.forEach(todo=>{
						todo.completed=value
					})
				}
			}
		}
	})
	

})(window);
