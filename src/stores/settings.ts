import { defineStore } from 'pinia'
import { watch } from 'vue'
import { defaultMappings, type Mapping } from '../api/mappings'

const STORAGE_KEY = 'hades-fitness-settings'

const getBrowserLocale = (): 'en' | 'fr' => {
	const browserLang = navigator.language.toLowerCase()
	return browserLang.startsWith('fr') ? 'fr' : 'en'
}

export const useSettingsStore = defineStore('settings', {
	state: () => ({
		game: 'hades' as 'hades' | 'hades2',
		locale: 'en' as 'en' | 'fr',
		mappings: new Map<string, Mapping>(),
	}),

	actions: {
		save() {
			const data = {
				game: this.game,
				locale: this.locale,
				mappings: Object.fromEntries(this.mappings),
			}
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		},
		resetToDefaults() {
			this.game = 'hades'
			this.locale = getBrowserLocale()
			this.mappings = new Map(defaultMappings.map((m) => [m.rewardId, m]))
			this.save()
		},
		updateMapping(rewardId: string, exerciseId: string, quantity: number) {
			this.mappings.set(rewardId, { rewardId, exerciseId, quantity })
			this.save()
		},
		setLocale(newLocale: 'en' | 'fr') {
			this.locale = newLocale
			this.save()
		},
		init() {
			const stored = localStorage.getItem(STORAGE_KEY)
			if (stored) {
				try {
					const parsed = JSON.parse(stored)
					this.game = parsed.game || 'hades'
					this.locale = parsed.locale || getBrowserLocale()
					this.mappings = new Map(
						Object.entries(parsed.mappings || {})
					) as Map<string, Mapping>
				} catch {
					this.resetToDefaults()
				}
			} else {
				this.resetToDefaults()
			}

			watch(
				() => [this.game, this.locale, this.mappings] as const,
				() => this.save(),
				{ deep: true }
			)
		},
	},
})
