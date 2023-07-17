<template lang="">
   <li class="toy-preview flex space-between">
    <h2> {{ toy.name }} </h2>
    <h2> {{ toy.price }} </h2>
          <!-- <p @click="$emit('toggled')"
            :class="done">
            {{ todo.txt }}
          </p> -->
          <button @click="$emit('remove')" class="btn">
            <span>x</span>
          </button>

          <RouterLink
              :to="'/toy/edit/' + toy._id"
class="btn" >
  <span>Edit</span>
          </RouterLink >

          
      </li > 
</template >

<script>
export default {
  name: 'toyPreview',
  props: ['toy'],
}
</script>
