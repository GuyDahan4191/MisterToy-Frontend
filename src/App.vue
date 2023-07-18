<template>
	<AppHeader />
	<RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'

export default {

	created() {
		this.$store.dispatch({ type: 'loadToys' })
	},
	components: {
		AppHeader,

	}
}
</script>

