import rewardsHadesData from '../data/rewards-hades.json'
import rewardsHades2Data from '../data/rewards-hades2.json'

export interface Reward {
	id: string
	i18nKey: string
	category: 'god' | 'entity' | 'encounter' | 'currency' | 'item' | 'special'
	note?: string
}

export const hadesRewards = rewardsHadesData as Reward[]
export const hades2Rewards = rewardsHades2Data as Reward[]