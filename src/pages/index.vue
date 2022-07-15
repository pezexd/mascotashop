<script setup lang="ts">
import routeLinks from '~/composables/route';

const route = useRoute()
const title = useTitle()

// const whatSection = computed(() => {
//   if (route.hash === '#hero'){
//     return 'Inicio'
//   }
//   else if (route.hash === '#whatis'){
//     return '¿Que somos?'
//   }
//   else if (route.hash === '#install'){
//     return 'Instalar'
//   }
//   else if (route.hash === '#tellme'){
//     return 'Dinos Hola!'
//   } else {
//     return ''
//   }
// })

function toggleTitle(){
  for (var x in routeLinks){
    const link = routeLinks[x]
    if(link.to === route.hash){
      title.value = `Mascota Shop - ${link.name}`
    }
  }
}

onMounted(() => {
  if(route.hash !== ''){
    toggleTitle()
  }
})
watch(route, () => {
  if (route.hash === ''){
    title.value = 'Mascota Shop'
  } else {
    toggleTitle()
  }
})

useHead({
  title: 'Mascota Shop',
})
</script>

<template>
  <main class="layout">
    <index-hero />
    <index-what-is />
    <index-install />
    <index-tellme />
  </main>
</template>
