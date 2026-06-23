import { defineStore } from 'pinia'

export interface SessionRoom {
	rewardId: string
	exerciseId: string
	quantity: number
	completed: boolean
	hasFishMultiplier: boolean
}

export const useSessionStore = defineStore('session', {
	state: () => ({
		isActive: false,
		rooms: [] as SessionRoom[],
	}),

	actions: {
		startSession() {
			this.isActive = true
			this.rooms = []
		},
		addRoom(room: SessionRoom) {
			this.rooms.push(room)
		},
		completeRoom(index: number) {
			if (this.rooms[index]) {
				this.rooms[index].completed = true
			}
		},
		endSession() {
			this.isActive = false
			this.rooms = []
		},
	},
})
