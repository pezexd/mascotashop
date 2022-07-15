<script setup lang="ts">

const props = defineProps<{
    hoverProp?: boolean,
    numberProp?: number,
}>()

const hoverIcon = ref(props.hoverProp)
const numberIcon = ref(props.numberProp)

const arrayNumbers = [3, 4, 5]

const filterNumber = computed(() => {
    if(arrayNumbers.some(number => number === numberIcon.value)){
        return true
    } else {
        return false
    }
})

const hoverIconImg = computed(() => {
    if(hoverIcon.value){
        return new URL(`../assets/img/what-is-icons/bg_hover_icon_${numberIcon.value}.svg`, import.meta.url).toString()
    } else {
        return new URL(`../assets/img/what-is-icons/bg_icon_${numberIcon.value}.svg`, import.meta.url).toString()
    }
})

const figureIcon = computed(() => {
    return new URL(`../assets/img/what-is-icons/icon_${numberIcon.value}.svg`, import.meta.url).toString()
})

const sparkIcon = computed(() => {
    return new URL(`../assets/img/what-is-icons/assets_icon_${numberIcon.value}.svg`, import.meta.url).toString()
})

const borderIcon = computed(() => {
    return new URL(`../assets/img/what-is-icons/border_icon_${numberIcon.value}.svg`, import.meta.url).toString()
})
</script>

<template>
    <div class="w-auto max-w-[300px] bg-transparent" @mouseenter="hoverIcon = true" @mouseleave="hoverIcon = false">
        <div class="relative">
            <div class="absolute bottom-0 right-0 z-30 flex justify-center items-center w-12 h-12 rounded-full bg-stone-700">
                <span class="text-primary-400 text-2xl font-bold">
                    {{ numberIcon }}
                </span>
            </div>
            <div class="absolute top-0 left-0 z-30">
                <img class="w-full" :src="figureIcon" alt="Bg" />
            </div>
            <div class="absolute top-0 left-0 z-20">
                <img class="w-full" :src="sparkIcon" alt="Bg" />
            </div>
            <img :class="filterNumber ? 'z-0' : 'z-10'" class="relative w-full" :src="hoverIconImg" alt="Bg" />
            <div :class="filterNumber ? 'z-10' : 'z-0'" class="absolute top-0 left-0">
                <img class="w-full" :src="borderIcon" alt="Bg" />
            </div>
        </div>
    </div>
</template>