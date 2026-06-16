<template>
	<div class="app">
		<h1>You did it!</h1>
		<p>
			Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
			documentation
		</p>
	</div>
</template>

<script setup lang="ts">
import { useSettingsStore } from './stores/settings'
import { useExercisesStore } from './stores/exercises'
import { useRewardsStore } from './stores/rewards'
import { useSessionStore } from './stores/session'

// Initialize stores on app mount
const settingsStore = useSettingsStore()
const exercisesStore = useExercisesStore()
const rewardsStore = useRewardsStore()
const sessionStore = useSessionStore()
</script>

<style scoped>
.site {
	min-block-size: 100svh;
	overflow-x: clip;
	display: grid;
}
</style>
