import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { defaultMappings, type Mapping } from '../api/mappings'

const STORAGE_KEY = 'hades-fitness-settings'

export const useSettingsStore = defineStore('settings', () => {
	const game = ref<'hades' | 'hades2'>('hades')
	const mappings = ref<Map<string, Mapping>>(new Map())

	// Initialize mappings from localStorage or defaults
	const init = () => {
		const stored = localStorage.getItem(STORAGE_KEY)
		if (stored) {
			try {
				const parsed = JSON.parse(stored)
				game.value = parsed.game || 'hades'
				mappings.value = new Map(Object.entries(parsed.mappings || {}))
			} catch {
				resetToDefaults()
			}
		} else {
			resetToDefaults()
		}
	}

	const resetToDefaults = () => {
		game.value = 'hades'
		mappings.value = new Map(defaultMappings.map((m) => [m.rewardId, m]))
		save()
	}

	const updateMapping = (rewardId: string, exerciseId: string, quantity: number) => {
		mappings.value.set(rewardId, { rewardId, exerciseId, quantity })
		save()
	}

	const save = () => {
		const data = {
			game: game.value,
			mappings: Object.fromEntries(mappings.value),
		}
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	}

	// Auto-save on changes
	watch([game, mappings], () => {
		save()
	}, { deep: true })

	init()

	return {
		game,
		mappings,
		resetToDefaults,
		updateMapping,
	}
})