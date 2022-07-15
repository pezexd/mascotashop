<script setup lang="ts">
</script>

<template>
	<section id="hero" class="py-0 pb-24 md:py-24">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="flex flex-col text-center md:text-left gap-6 text-stone-800">
				<div class="flex flex-col gap-4 md:gap-0">
					<div>
						<p class="font-display text-2xl md:text-5xl">La mejor app para consentir a</p>
						<div class="relative">
							<h2 class="relative font-display text-5xl md:text-8xl z-10">
								TU MASCOTA
							</h2>
							<span class="hidden md:block absolute bottom-3 left-0 z-0 bg-primary-400 w-[16.5rem] h-6 rounded-full" />
						</div>
					</div>
					<div>
						<p class="text-lg">
							En <strong>MascotaShop</strong> puedes encontrar todo lo que hara feliz a tu mascota... sin tener que salir de tu casa!
						</p>
					</div>
				</div>
				<div class="flex justify-center">
					<index-hero-button />
				</div>
			</div>
			<div class="flex justify-center order-3 md:order-none">
				<img class="w-auto max-w-xs md:max-w-md" src="../assets/img/hero.svg" alt="Vector gato y perro con el nombre de Mascotashop">
			</div>
			<div class="flex flex-col gap-2 order-last md:order-none">
				<p class="text-2xl text-center">
					¡Suscribete y recibe las novedades de <br> MascotaShop!
				</p>
				<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
					<input class="px-6 py-3 rounded-full text-lg text-center bg-stone-200 text-stone-500 placeholder:text-stone-500 focus:outline-none" type="text" placeholder="Ingresa tu correo">
					<button class="px-6 py-3 rounded-full text-lg bg-primary-300 text-stone-700">
						Suscribirse
					</button>
				</div>
			</div>
			<div class="flex flex-col gap-4 items-center justify-center sm:flex-row md:justify-center md:items-end">
				<get-in-buttons />
			</div>
		</div>
	</section>
</template>