<script setup lang="ts">
import FacebookIcon from '~icons/fa6-brands/facebook-square'
import InstagramIcon from '~icons/fa6-brands/instagram'
import CloseIcon from '~icons/ph/x-bold'
import MenuIcon from '~icons/ph/list-bold'
import routeLinks from '~/composables/route'

const route = useRoute()
const showNav = ref(false)

const activeClass = 'bg-primary-400 text-white font-bold'
const inactiveClass = 'bg-stone-200 text-stone-400 text-base'

function toggleNav(){
	if(showNav.value === false){
		showNav.value = true
	} else {
		showNav.value = false
	}
}

const isActive = (link: string) => {
	if(link === route.hash){
		return true
	} else if (link === '#hero' && route.hash === '') {
		return true
	} else {
		return false
	}
}

</script>

<template>
	<header class="layout flex flex-col py-4">
		<div class="flex justify-center md:justify-start">
			<span class="font-display text-5xl">
				Mascotashop
			</span>
		</div>
		<div class="block md:hidden fixed top-0 right-0 z-50">
			<button class="px-4 py-3 mt-4 mr-4 text-base bg-stone-200 text-stone-400 rounded-full hover:bg-primary-400 hover:text-white transition ease-in duration-100" @click="toggleNav">
				<close-icon v-if="showNav" />
				<menu-icon v-else />
			</button>
		</div>
		<div :class="showNav ? 'flex' : 'hidden md:flex'" class="fixed inset-0 z-40 bg-gray-50/90 md:bg-transparent flex-col justify-center gap-4 px-4 md:gap-14 md:px-0 md:justify-end md:relative md:flex-row">
			<nav class="flex flex-col items-center gap-4 md:gap-8 md:flex-row">
				<router-link v-for="(link, index) in routeLinks" :key="index" class="block text-center w-full px-6 py-2 rounded-full md:w-auto hover:bg-primary-400 hover:text-white transition ease-in duration-100" :class="isActive(link.to) ? activeClass : inactiveClass" :to="link.to">
					{{ link.name }}
				</router-link>
			</nav>
			<div class="flex justify-center gap-1 text-stone-700">
				<a href="/">
					<facebook-icon class="w-10 h-10" />
				</a>
				<a href="/">
					<instagram-icon class="w-10 h-10" />
				</a>
			</div>
		</div>
	</header>
</template>