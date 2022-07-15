<script setup lang="ts">
const { y } = useWindowScroll()

const router = useRouter()
const showScroll = ref(false)
const showText = ref(false)

function toTop(){
    window.scrollTo(0, 0)
}

watch(y, () => {
    if(y.value >= 100){
        showScroll.value = true
    } else {
        router.push({ hash: ''})
        showScroll.value = false
        showText.value = false
    }
})

</script>

<template>
    <div v-if="showScroll" class="fixed bottom-4 right-4">
        <button class="flex flex-col gap-2 justify-center items-center px-1 py-2 rounded-2xl bg-stone-700" @click="toTop" @mouseover="showText = true" @mouseleave="showText = false">
            <img class="w-8 h-8 rotate-180" src="../../assets/img/scroll.svg" alt="">
            <transition>
                <span v-show="showText" class="px-2 text-white" style="writing-mode: vertical-rl; transform:scale(-1);">
                    Scroll
                </span>
            </transition>
        </button>
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .100s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>