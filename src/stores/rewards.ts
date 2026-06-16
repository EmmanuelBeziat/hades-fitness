import { defineStore } from 'pinia'
import { computed } from 'vue'
import { hadesRewards, hades2Rewards, type Reward } from '../api/rewards'
import { useSettingsStore } from './settings'

export const useRewardsStore = defineStore('rewards', () => {
	const settingsStore = useSettingsStore()

	const currentRewards = computed<Reward[]>(() => {
		return settingsStore.game === 'hades2' ? hades2Rewards : hadesRewards
	})

	const getRewardById = (id: string) => {
		return currentRewards.value.find((r) => r.id === id)
	}

	return {
		currentRewards,
		getRewardById,
	}
})