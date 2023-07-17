<template>
	<AppHeader />
	<RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'

export default {

	created() {
		this.$store.dispatch({ type: 'loadToys' })
	},
	components: {
		AppHeader,

	}
}
</script>

