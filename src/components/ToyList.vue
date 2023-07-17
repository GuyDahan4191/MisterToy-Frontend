<template lang="">
    <section class="toy-list">
        <!-- <RouterLink class="btn btn-add" to="/toy/edit">Add</RouterLink> -->
        <ul v-if="toys.length" class="clean-list">
          <ToyPreview 
              v-for="toy in toys" 
              :key="toy._id"   
              :toy="toy"
              @remove="$emit('remove', toy._id)" />
        </ul>
        <p v-else>No toys to show..</p>
      </section>
</template>

<script>
import ToyPreview from '../components/ToyPreview.vue'
export default {

  name: 'toyList',

  props: ['toys'],

  components: {
    ToyPreview,
  },
}
</script>
<style lang="">
  
</style>