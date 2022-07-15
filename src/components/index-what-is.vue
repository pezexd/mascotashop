<script setup lang="ts">

const iconsArr = [1, 2, 3, 4, 5]

</script>

<template>
    <section id="whatis" class="py-0 pb-24 md:py-24">
        <div class="flex flex-col gap-4 items-center md:grid md:grid-cols-2 md:justify-items-center md:gap-0 md:items-start">
            <div class="relative">
                <div class="relative z-10">
                    <h2 class="text-4xl">
                        ¿Que es MascotaShop?
                    </h2>
                    <p class="text-lg max-w-md">
                        <strong>
                            MascotaShop
                        </strong>
                        es una aplicacion movil hecha para consentir a tu mascota, porque sabemos que son parte esencial de tu familia! 
                        <br>
                        Te presentamos algunos de sus beneficios.
                    </p>
                </div>
                <div>
                    <img class="absolute top-0 left-0 w-auto max-w-xs md:max-w-md z-0" src="../assets/img/foot-whatis.svg" alt="Pet foot">
                </div>
            </div>
            <index-what-is-icon v-for="icon in iconsArr" :key="icon" :number-prop="icon" :hover-prop="false" />
        </div>
    </section>
</template>