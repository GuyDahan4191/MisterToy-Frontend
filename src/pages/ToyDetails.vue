<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p>ID: {{ toy._id }}</p>
      <p>Name: {{ toy.name }}</p>
      <p>Price: {{ toy.price }}$</p>
      <p>Labels: {{ toy.labels }}</p>
    </article>

    <button @click="goBack">Back to toys</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy.service.local.js'

export default {
  name: 'ToyDetail',
  data() {
    return {
      toy: null,
    }
  },
  // watch: {
  //   '$route.params': {
  //     handler() {
  //       const { toyId } = this.$route.params

  //       toyService.getById(toyId)
  //         .then((toy) => (this.toy = toy))

  //       // this.$store
  //       //   .dispatch({ type: 'getById', todoId })
  //       //   .then(todo => (this.todo = todo))
  //     },
  //     immediate: true,
  //   },
  // },
  created() {
    const { toyId } = this.$route.params
    console.log(toyId)
    toyService.getById(toyId).then(toy => {
      console.log(toy)
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
