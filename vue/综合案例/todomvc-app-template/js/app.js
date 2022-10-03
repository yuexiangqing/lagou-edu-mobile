(function (window) {
	'use strict';

	// 声明对象存储所有用于进行事项类别筛选的函数
	let filters ={
		all(todos){
			return todos
		},
		active(todos){
			return todos.filter(todo=>!todo.completed)
		},
		completed(todos){
			return todos.filter(todo=>todo.completed)
		}
	};

	// 声明常量用于存储本地存储中保存事项的键
	const TODOS_KEY = 'todos_vue'
	// 声明对象统一保存本地存储的处理功能
	let todoStorage={
		// 用于读取本地存储数据
		get(){
			return JSON.parse(localStorage.getItem(TODOS_KEY)) || []
		}
	}


	new Vue({
		el: '#app',
		data: {
			// todos 用于存储所有事项信息
			// todos: [
			// 	{ id: 1, title: '示例内容1', completed: true },
			// 	{ id: 2, title: '示例内容2', completed: false },
			// 	{ id: 3, title: '示例内容3', completed: true },
			// ],
			todos:todoStorage.get(),

			// 存储新增输入框的数据
			newTodo: '',
			// 存储正在编辑的todo
			editingTodo: null,
			// 存储正在编辑todo的原始内容
			titleBeforeEdit: '',
			// 存储要显示的事项类别
			todoType: 'all'

		},
		methods: {
			//进行单位复数化处理
			// pluralize:function(){
			// 	return this.remaining===1?'item':'items'
			// }
			pluralize(word) {
				return word + (this.remaining === 1 ? '' : 's')
			},
			// 用于新增事项
			addTodo() {
				var value = this.newTodo.trim()
				if (!value) { return };
				this.todos.push({ id: this.todos.length + 1, title: value, completed: false })
				// 清空输入框
				this.newTodo = ''
			},
			// 用于删除单个事项
			removeTodo(todo) {
				var index = this.todos.indexOf(todo)
				this.todos.splice(index, 1)
			},
			// 用于删除已完成事项
			// removeCompleted: function () {
			// 	this.todos = this.todos.filter(todo => {
			// 		return !todo.completed
			// 	})
			// },
			removeCompleted(){
				this.todos=filters.active(this.todos)
			},
			// 用于触发编辑，保存相关信息
			editTodo(todo) {
				this.editingTodo = todo;
				this.titleBeforeEdit = todo.title;
			},
			// 用于取消编辑，还原状态与内容
			cancelEdit(todo) {
				this.editingTodo = null;
				todo.title = this.titleBeforeEdit;
			},
			// 用于保存编辑
			editDone(todo) {
				// 先判断，否则按回车键的时候，会将当前和最后一个一起删除
				if (!this.editingTodo) return;
				this.editingTodo = null;
				todo.title = todo.title.trim()
				// 如果输入的是空的，删除当前todo
				if (!todo.title) {
					this.removeTodo(todo)
				}
			}

		},
		computed: {
			// 用于进行事项筛选处理
			filteredTodo(){
				return filters[this.todoType](this.todos)
			},
			// 用于获取待办事项个数 未完成的事项个数
			remaining() {
				// return this.todos.filter(todo=>!todo.completed).length;
				// return this.todos.filter(function (todo) {
				// 	return !todo.completed
				// }).length

				return filters.active(this.todos).length; //filters['active'](this.todos)
			},
			// 用于设置全部切换选框状态
			// - 原始写法
			// allDone(){
			// 	return this.remaining===0
			// }
			// - 最新功能书写方式 点击上面的 全选下面的
			allDone: {
				get() {
					return this.remaining === 0
				},
				set(value) {
					// value代表全部切换选框的状态
					this.todos.forEach(todo => {
						todo.completed = value
					})
				}
			}
		},
		directives: {
			// 用于设置正在编辑的事项输入框获取焦点
			'todo-focus'(el, binding) {
				// console.log(binding.value);
				if (binding.value) {
					el.focus()
				}
			}
		}
	})


})(window);
