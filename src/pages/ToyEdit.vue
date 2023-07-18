<template>
    <section v-if="toyToEdit" class="toy-edit">
        <form @submit.prevent="saveToy">
            <label for="txt" class="form-label">Toy Name</label>
            <input required v-model="toyToEdit.name" id="txt" type="text" placeholder="Enter toy name here..." />

            <label for="price" class="form-label">Price </label>
            <input required v-model.number="toyToEdit.price" id="price" type="number" />

            <label for="inStock">In Stock</label>
            <input id="inStock" class="input" type="checkbox" v-model="toyToEdit.inStock">

            <div>
                <button @click="saveToy">save</button>
                <button @click="goBack">go back</button>
            </div>
        </form>
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.local.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    name: 'toy-edit',
    data() {
        return {
            toyToEdit: null,
        }
    },
    created() {
        console.log('Toy edit');
    },
    watch: {
        '$route.params': {
            handler() {
                const { toyId } = this.$route.params
                if (toyId) {
                    toyService.getById(toyId).then((toy) => (this.toyToEdit = toy))
                } else {
                    this.toyToEdit = toyService.getEmptyToy()
                }
            },
            immediate: true,
        },
    },
    methods: {
        goBack() {
            this.$router.push('/toy')
        },
        saveToy() {
            console.log(this.toyToEdit)
            this.$store
                .dispatch({ type: 'saveToy', toy: this.toyToEdit })
                .then(() => {
                    showSuccessMsg('Updated succssefully')
                    this.$router.push('/toy')
                })
                .catch((err) => {
                    console.log('err', err);
                    showErrorMsg("Couldn't update toy")
                })
        },
    },
}
</script>
