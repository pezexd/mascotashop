<script setup lang="ts">
import MailIcon from '~icons/ph/envelope'
import SendIcon from '~icons/ph/paper-plane-tilt-bold'

</script>

<template>
    <section id="tellme" class="py-0 pb-24 md:py-24">
        <div class="flex flex-col md:grid md:grid-cols-2">
            <div class="max-w-sm">
                <img src="../assets/img/pet_tellme.svg" alt="">
            </div>
            <div>
                <div class="flex gap-2 items-center">
                    <mail-icon class="text-primary-400 w-10 h-10"/>
                    <span class="text-2xl font-bold">
                        info@MascotaShop.pet
                    </span>
                </div>
                <form class="flex flex-col gap-2" action="">
                    <div class="flex flex-col">
                        <label class="px-6 text-primary-400 text-lg font-bold" for="message">
                            Mensaje
                        </label>
                        <textarea class="px-6 py-3 rounded-2xl text-lg bg-stone-200 text-stone-500 placeholder:text-stone-500 focus:outline-none" name="message" cols="30" rows="10"></textarea>
                    </div>
                    <div class="flex flex-col gap-2 md:grid md:grid-cols-2">
                        <div class="flex flex-col">
                            <label class="px-6 text-primary-400 text-lg font-bold" for="message">
                                Nombre
                            </label>
                            <input class="px-6 py-3 rounded-full text-lg bg-stone-200 text-stone-500 placeholder:text-stone-500 focus:outline-none" name="message" type="text">
                        </div>
                        <div class="flex flex-col">
                            <label class="px-6 text-primary-400 text-lg font-bold" for="message">
                                Correo
                            </label>
                            <input class="px-6 py-3 rounded-full text-lg bg-stone-200 text-stone-500 placeholder:text-stone-500 focus:outline-none" name="message" type="text">
                        </div>
                    </div>
                    <div class="flex justify-center mt-4">
                        <button class="w-full flex justify-center items-center font-bold gap-2 px-6 py-3 rounded-full text-lg bg-primary-300 text-stone-700 md:w-auto" type="submit">
                            <span>
                                Enviar
                            </span>
                            <send-icon />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>