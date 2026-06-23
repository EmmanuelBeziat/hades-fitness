import { defineStore } from 'pinia'
import { hadesRewards, hades2Rewards, type Reward } from '../api/rewards'
import { useSettingsStore } from './settings'

export const useRewardsStore = defineStore('rewards', {
	getters: {
		currentRewards(): Reward[] {
			const settingsStore = useSettingsStore()
			return settingsStore.game === 'hades2' ? hades2Rewards : hadesRewards
		},
		allRewards(): Reward[] {
			return this.currentRewards
		},
	},

	actions: {
		getRewardById(id: string) {
			return this.currentRewards.find((r) => r.id === id)
		},
	},
})
