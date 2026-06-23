<template>
	<img :src="iconSrc" :alt="label" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
})

const icons = import.meta.glob('../assets/images/icons/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

const iconSrc = computed(() => {
	const path = `../assets/images/icons/${props.name}.webp`
	return icons[path]
})
</script>

<style scoped>
img {
	display: block;
	max-inline-size: 100%;
	block-size: auto;
	font: 400 .5rem/1.25 var(--font-stack-common);
}
</style>
