import { toyService } from '../services/toy.service.local.js'

export const toyStore = {
    state: {
        toys: null,
        filterBy: {
            name: '',
            status: '',
            labels: [],
            sortBy: '',
            isDescending: 1
        },
    },

    getters: {
        toys({ filterBy, toys }) {
            if (!toys) return null

            //filter
            const { name, status, labels } = filterBy
            let filteredToys = toys

            const regex = new RegExp(name, 'i')
            filteredToys = filteredToys.filter((toy) => regex.test(toy.name))

            if (status) {
                filteredToys = filteredToys.filter(
                    (toy) =>
                        (toy.inStock && status === 'inStock') ||
                        (!toy.inStock && status === 'outOfStock') ||
                        (status === 'all')
                )
            }

            if (labels.length > 0) {
                filteredToys = filteredToys.filter((toy) =>
                    labels.some((label) => toy.labels.some((toyLabel) => toyLabel.title === label))
                )
            }

            // Sort
            let prop = filterBy.sortBy;
            const sortBy = {
                [prop]: filterBy.isDescending
            };

            if (filterBy.sortBy === 'price') {
                filteredToys.sort((t1, t2) => (t1.price - t2.price) * sortBy.price)
            } else if (filterBy.sortBy === 'name') {
                filteredToys.sort((t1, t2) => {
                    if (t1.name > t2.name) return 1 * filterBy.isDescending;
                    if (t2.name > t1.name) return -1 * filterBy.isDescending;
                    return 0;
                });
            }

            return filteredToys
        },
    },

    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },

        saveToy(state, { toy }) {
            state.toys.push(toy)
        },

        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex((toy) => toy._id === toyId)
            state.toys.splice(idx, 1)
        },

        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy
        },

        updateToy(state, { toy }) {
            const idx = state.toys.findIndex((t) => t._id === toy._id)
            state.toys.splice(idx, 1, toy)
        },
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
        // loadToys({ commit }, { filterBy, sortBy }) {
        //     if (!filterBy) filterBy = { name: '', status: '', labels: null }
        //     if (!sortBy) sortBy = {}

        //     toyService.query(filterBy, sortBy).then(toys => {
        //         commit({ type: 'setToys', toys })
        //         const labels = toyService.getLabels()
        //         commit({ type: 'setLabels', labels })
        //     })
        // },

        removeToy({ commit }, { toyId }) {
            return toyService.remove(toyId)
                .then(() => commit({ type: 'removeToy', toyId }))
                .catch(err => {
                    console.log(err)
                    return Promise.reject()
                })
        },

        saveToy({ commit }, { toy }) {
            const actionType = toy._id ? 'updateToy' : 'addToy'
            return toyService.save(toy)
                .then((savedToy) => {
                    commit({ type: actionType, toy: savedToy })
                    return savedToy
                })
        },
    },
}

