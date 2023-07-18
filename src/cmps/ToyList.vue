<template>
  <section class="toy-list">
    <RouterLink class="btn btn-add" to="/toy/edit">Add
    </RouterLink>

    <ul v-if="toys.length" class="clean-list">

      <ToyPreview v-for="toy in toys" :key="toy._id" :toy="toy" @remove="removeToy" />
    </ul>
    <p v-else>No toys to show..</p>
  </section>
</template>

<script>
import ToyPreview from './ToyPreview.vue'
export default {
  name: 'ToyList',
  props: ['toys'],
  components: {
    ToyPreview,
  },
  methods: {
    removeToy(toyId) {
      this.$emit('remove', toyId)
    },
  },
}
</script>


<style lang="">
  
</style>