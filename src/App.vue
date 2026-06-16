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
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from './stores/settings'
import { useExercisesStore } from './stores/exercises'
import { useRewardsStore } from './stores/rewards'
import { useSessionStore } from './stores/session'

// Initialize stores on app mount
const settingsStore = useSettingsStore()
const exercisesStore = useExercisesStore()
const rewardsStore = useRewardsStore()
const sessionStore = useSessionStore()

// Sync i18n locale with settings store
const { locale: i18nLocale } = useI18n()
i18nLocale.value = settingsStore.locale

watch(
	() => settingsStore.locale,
	(newLocale) => {
		i18nLocale.value = newLocale
	}
)
</script>

<style scoped>
.site {
	min-block-size: 100svh;
	overflow-x: clip;
	display: grid;
}
</style>
