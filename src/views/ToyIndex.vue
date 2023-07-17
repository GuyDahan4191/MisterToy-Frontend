<template lang="">
	<section class="toy-app">
          <ToyList v-if="toys"
                    :toys="toys"
					@remove="removeToy"/>
          <!-- <Loader v-else /> -->
      </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import ToyList from '../components/ToyList.vue'

export default {
    components: {
        ToyList,
        // TodoFilter,
        // Loader,
    },
    // data() {
    // 	return {
    // 		isLoading: false,
    // 		filterBy: {
    // 			txt: '',
    // 			status: '',
    // 			pageIdx: 0,
    // 			pageSize: 5,
    // 		},
    // 	}
    // },
    // created() {
    // 	this.debounceHandler = utilService.debounce(this.setFilterByTxt, 500)
    // },
    methods: {
        removeToy(toyId) {
            this.$store
                .dispatch({ type: 'removeToy', toyId })
                .then(() => {
                    showSuccessMsg('Todo removed')
                })
                .catch((err) => {
                    showErrorMsg('Cannot remove todo')
                })
        },

        // 	toggleTodo(todo) {
        // 		const newTodo = JSON.parse(JSON.stringify(todo))
        // 		newTodo.isDone = !newTodo.isDone
        // 		this.$store
        // 			.dispatch({ type: 'saveTodo', todo: newTodo })
        // 			.then(() => {
        // 				showSuccessMsg('Todo updated')
        // 			})
        // 			.catch((err) => {
        // 				showErrorMsg('Cannot update todo')
        // 			})
        // 	},
        // 	filterTodos() {
        // 		const filterBy = { ...this.filterBy }
        // 		this.$store.commit({ type: 'setFilterBy', filterBy })

        // 		// If filtering in backend/service
        // 		// this.isLoading = true
        // 		// this.$store
        // 		//   .dispatch({ type: 'loadTodos', filterBy })
        // 		//   .then(() => (this.isLoading = false))
        // 	},
        // 	setPage(diff) {
        // 		this.filterBy.pageIdx += diff
        // 		const maxPageIdx = Math.floor(this.todos.length / this.filterBy.pageSize)
        // 		if (this.filterBy.pageIdx < 0) {
        // 			this.filterBy.pageIdx = 0
        // 		} else if (this.filterBy.pageIdx > maxPageIdx) {
        // 			this.filterBy.pageIdx = maxPageIdx
        // 		}
        // 		this.filterTodos()
        // 	},
        // 	setFilterByTxt(txt) {
        // 		this.filterBy.txt = txt
        // 		this.filterTodos()
        // 	},
        // 	setFilterByStatus(status) {
        // 		this.filterBy.status = status
        // 		this.filterTodos()
        // 	},
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
    },
}
</script>


