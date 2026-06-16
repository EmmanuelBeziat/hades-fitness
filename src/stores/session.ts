import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface SessionRoom {
	rewardId: string
	exerciseId: string
	quantity: number
	completed: boolean
	hasFishMultiplier: boolean
}

export const useSessionStore = defineStore('session', () => {
	const isActive = ref(false)
	const rooms = ref<SessionRoom[]>([])

	const startSession = () => {
		isActive.value = true
		rooms.value = []
	}

	const addRoom = (room: SessionRoom) => {
		rooms.value.push(room)
	}

	const completeRoom = (index: number) => {
		if (rooms.value[index]) {
			rooms.value[index].completed = true
		}
	}

	const endSession = () => {
		isActive.value = false
		rooms.value = []
	}

	return {
		isActive,
		rooms,
		startSession,
		addRoom,
		completeRoom,
		endSession,
	}
})