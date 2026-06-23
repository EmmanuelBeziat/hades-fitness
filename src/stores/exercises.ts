import { defineStore } from 'pinia'
import { allExercises, type Exercise } from '../api/exercises'

export const useExercisesStore = defineStore('exercises', {
	state: () => ({
		exercises: allExercises as Exercise[],
	}),

	actions: {
		getExerciseById(id: string) {
			return this.exercises.find((e) => e.id === id)
		},
	},
})
