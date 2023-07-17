import { toyService } from '../services/toy.service.local.js'

export const toyStore = {
    state: {
        toys: null,
        // todosCount: null,
        // currTodo: null,
        // filterBy: {
        //   txt: '',
        //   status: '',
        //   pageIdx: 0,
        //   pageSize: 5,
        // },
        // sortBy: {
        //   by: '',
        //   desc: 1,
        // },
    },
    getters: {
        // todo({ currTodo }) {
        //   return currTodo
        // },
        // donePct({ todos }) {
        //   if (!todos || !todos.length) return 0
        //   const dones = todos.reduce(
        //     (acc, todo) => (todo.isDone ? acc + 1 : acc),
        //     0
        //   )
        //   const total = todos.length

        //   return ((dones / total) * 100).toFixed(2)
        // },
        toys({ toys }) {
            return toys
        },
        // todosToDisplay() {
        //   if (!todos) return null

        //   const { status, txt, pageIdx, pageSize } = filterBy
        //   let filteredTodos = todos

        //   const regex = new RegExp(txt, 'i')
        //   filteredTodos = filteredTodos.filter((todo) => regex.test(todo.txt))

        //   if (status) {
        //     filteredTodos = filteredTodos.filter(
        //       (todo) =>
        //         (todo.isDone && status === 'done') ||
        //         (!todo.isDone && status === 'active')
        //     )
        //   }

        //   const startIdx = pageIdx * pageSize
        //   filteredTodos = filteredTodos.slice(startIdx, startIdx + pageSize)

        //   return filteredTodos
        // },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },

        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex((toy) => toy._id === toyId)
            state.toys.splice(idx, 1)
        },
        // setFilterBy(state, { filterBy }) {
        //   state.filterBy = filterBy
        // },
        // setCurrTodo(state, { todo }) {
        //   state.currTodo = todo
        // },
        // addTodo(state, { todo }) {
        //   state.todos.unshift(todo)
        // },
        // updateTodo(state, { todo }) {
        //   const idx = state.todos.findIndex((t) => t._id === todo._id)
        //   state.todos.splice(idx, 1, todo)
        // },
    },
    actions: {
        loadToys(context) {
            toyService
                .query()
                .then((toys) => {
                    context.commit({ type: 'setToys', toys })
                })
                .catch((err) => {
                    throw err
                })
        },

        removeToy({ commit }, { toyId }) {
            return toyService.remove(toyId)
                .then(() => commit({ type: 'removeToy', toyId }))
                .catch(err => {
                    console.log(err)
                    return Promise.reject()
                })
        }

        //   saveTodo({ commit, dispatch }, { todo }) {
        //     const actionType = todo._id ? 'updateTodo' : 'addTodo'
        //     return todoService.save(todo).then((savedTodo) => {
        //       commit({ type: actionType, todo: savedTodo })
        //       let txt = actionType === 'addTodo' ? 'Added a todo' : 'Updated todo'
        //       txt += `: ${savedTodo.txt}`
        //       const activity = { txt, at: Date.now() }
        //       dispatch({ type: 'addActivity', activity })
        //       return savedTodo
        //     })
        //   },

        //   },
        //   getById({ commit }, { todoId }) {
        //     return todoService.getById(todoId).then((todo) => {
        //       commit({ type: 'setCurrTodo', todo })
        //       return todo
        //     })
        //   },
        // },
        // loadTodos({ commit }, { filterBy }) {
        //   todoService
        //     .query(filterBy)
        //     .then(todos => commit({ type: 'setTodos', todos }))
        //     .catch(err => {
        //       throw err
        //     })
        // },
    }
}

