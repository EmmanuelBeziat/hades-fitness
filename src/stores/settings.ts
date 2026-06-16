import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { defaultMappings, type Mapping } from '../api/mappings'

const STORAGE_KEY = 'hades-fitness-settings'

export const useSettingsStore = defineStore('settings', () => {
	const game = ref<'hades' | 'hades2'>('hades')
	const locale = ref<'en' | 'fr'>('en')
	const mappings = ref<Map<string, Mapping>>(new Map())

	// Initialize mappings and locale from localStorage or defaults
	const init = () => {
		const stored = localStorage.getItem(STORAGE_KEY)
		if (stored) {
			try {
				const parsed = JSON.parse(stored)
				game.value = parsed.game || 'hades'
				locale.value = parsed.locale || getBrowserLocale()
				mappings.value = new Map(Object.entries(parsed.mappings || {}))
			} catch {
				resetToDefaults()
			}
		} else {
			resetToDefaults()
		}
	}

	const getBrowserLocale = (): 'en' | 'fr' => {
		const browserLang = navigator.language.toLowerCase()
		return browserLang.startsWith('fr') ? 'fr' : 'en'
	}

	const resetToDefaults = () => {
		game.value = 'hades'
		locale.value = getBrowserLocale()
		mappings.value = new Map(defaultMappings.map((m) => [m.rewardId, m]))
		save()
	}

	const updateMapping = (rewardId: string, exerciseId: string, quantity: number) => {
		mappings.value.set(rewardId, { rewardId, exerciseId, quantity })
		save()
	}

	const setLocale = (newLocale: 'en' | 'fr') => {
		locale.value = newLocale
		save()
	}

	const save = () => {
		const data = {
			game: game.value,
			locale: locale.value,
			mappings: Object.fromEntries(mappings.value),
		}
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	}

	// Auto-save on changes
	watch([game, locale, mappings], () => {
		save()
	}, { deep: true })

	init()

	return {
		game,
		locale,
		mappings,
		resetToDefaults,
		updateMapping,
		setLocale,
	}
})