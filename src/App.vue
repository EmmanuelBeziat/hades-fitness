<template>
	<div class="app">
		<Header />

		<main id="content" class="main" tabindex="-1">
			<RouterView />
		</main>

		<Footer />
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings'
import { useExercisesStore } from './stores/exercises'
import { useRewardsStore } from './stores/rewards'
import { useSessionStore } from './stores/session'
import Header from './components/global/Header.vue'
import Footer from './components/global/Footer.vue'

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
.app {
	min-block-size: 100svh;
	overflow-x: clip;
	display: grid;
	grid-template-rows: auto 1fr auto;
}
</style>
