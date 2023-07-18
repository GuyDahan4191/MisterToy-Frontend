<template>
  <section class="toy-filter">
    <input type="text" name="filter" placeholder="Search toys" v-model="filterBy.name" @input="setFilterName" />

    <div>
      <select v-model="filterBy.status">
        <option value="all">All</option>
        <option value="inStock">In stock</option>
        <option value="outOfStock">Out of stock</option>
      </select>
    </div>

    <div>
      <label>Labels:</label>
      <select id="labels" multiple v-model="filterBy.labels">
        <option v-for="label in labels" :key="label" :value="label">
          {{ label }}
        </option>
      </select>
    </div>
  </section>

  <section class="toy-sort">
    <label>Sort By</label>
    <select v-model="filterBy.sortBy">
      <option value="">select</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
    </select>
    <button @click="changeDirection">Change direction</button>
  </section>
</template>

<script>
import { utilService } from "../services/util.service.js"

export default {
  emits: ['filteredName', 'filter'],
  data() {
    return {
      filterBy: {
        name: '',
        status: '',
        labels: [],
        sortBy: '',
        isDescending: 1
      },
      labels: [
        'on wheels',
        'Box game',
        'Art',
        'Baby',
        'Doll',
        'Puzzle',
        'Outdoor',
        'Battery Powered'
      ],
    }
  },
  methods: {
    changeDirection() {
      this.filterBy.isDescending *= -1
    },
    setFilterName() {
      this.$emit('filteredName', this.filterBy.name)
    },
  },
  watch: {
    filterBy: {
      handler() {
        this.$emit('filter', this.filterBy)
      },
      deep: true,
    },
  },
}
</script>
