import defaultMappingsData from '../data/default-mappings.json'

export interface Mapping {
	rewardId: string
	exerciseId: string
	quantity: number
}

export const defaultMappings = defaultMappingsData as Mapping[]