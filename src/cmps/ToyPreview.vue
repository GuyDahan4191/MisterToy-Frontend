<template>
  <li class="toy-preview flex space-between">
    <h2> Name: {{ toy.name }} </h2>
    <h4> Price: {{ toy.price }}$ </h4>

    <div class="action-btns">
      <RouterLink :to="'/toy/edit/' + toy._id" class="btn">
        <span>Edit |</span>
      </RouterLink>

      <RouterLink :to="'/toy/' + toy._id" class="btn">
        <span> Details |</span>
      </RouterLink>

      <button @click="removeToy(toy._id)" class="btn">
        <span> Delete</span>
      </button>
    </div>
  </li>
</template >

<script>
export default {
  name: 'ToyPreview',
  props: ['toy'],
  methods: {
    removeToy(toyId) {
      this.$emit('remove', toyId)
    },
  },
}
</script>
