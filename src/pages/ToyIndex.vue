<template lang="">
    <ToyFilter
	    @filteredName="debounceHandler" 
	    @filter="setFilterBy"
	/>


	<section class="toy-app">
        <ToyList v-if="toys"
                    :toys="toys"
					@remove="removeToy"/>
    </section>
    
    <RouterView />
	
    <RouterLink
        :to="'/'"
        class="btn">
        <span>close</span>
    </RouterLink>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { utilService } from '../services/util.service.js'

import ToyList from '../cmps/ToyList.vue'
import ToyFilter from '../cmps/ToyFilter.vue'

export default {
    components: {
        ToyList,
        ToyFilter,

    },
    data() {
        return {
            isLoading: false,
            filterBy: {
                Name: '',
                status: '',
                labels: [],
                sortBy: '',
                isDescending: 1
            },
        }
    },
    created() {
        this.debounceHandler = utilService.debounce(this.setFilterByName, 500)
    },
    methods: {
        removeToy(toyId) {
            this.$store
                .dispatch({ type: 'removeToy', toyId })
                .then(() => {
                    showSuccessMsg('Toy removed')
                })
                .catch((err) => {
                    showErrorMsg('Cannot remove toy')
                })
        },
        filterToys() {
            const filterBy = { ...this.filterBy }
            this.$store.commit({ type: 'setFilterBy', filterBy })

            // If filtering in backend/service
            // this.isLoading = true
            // this.$store
            //   .dispatch({ type: 'loadTodos', filterBy })
            //   .then(() => (this.isLoading = false))
        },
        setFilterByName(name) {
            this.filterBy.name = name
            this.filterToys()
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
            this.filterToys()
        },
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
    },
}
</script>


