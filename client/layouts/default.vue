<template>
	<v-app>
		<Navbar class="navbar" />

		<v-main class="main-content">
			<slot />
		</v-main>
		<Footer class="foot"/>

	</v-app>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'DefaultLayout',
	components: {
		Navbar,
		Footer,
	},
}
</script>

<style scoped>
.app-container {
	min-height: 100vh;
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.main-content {
	flex: 1;
}
.foot{
	justify-self: flex-end;
}
</style>
