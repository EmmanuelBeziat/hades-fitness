<template>
	<button class="reward-button">
		<div class="reward-icon">
			<Icon :name="icon" :label="label" />
		</div>
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'

const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	label: {
		type: String,
		required: true
	}
})
</script>

<style scoped>
.reward-button {
	display: grid;
	place-items: center;
	gap: .5rem;
	background: none;
	border: 0;
	color: var(--color-text);
	font: 700 1.25rem/1.25 var(--font-stack-heading);
	padding: 0;
}

.reward-icon {
	overflow: clip;
	inline-size: 5rem;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: url('../../assets/images/boon-select-circle.webp') center/cover no-repeat;
		pointer-events: none;
	}
}

.reward-icon :deep(img) {
	/* max-inline-size: calc(100% + 5rem / 2); */
	scale: 1.95;
}
</style>
