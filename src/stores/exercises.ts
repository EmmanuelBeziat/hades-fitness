import { defineStore } from 'pinia'
import { ref } from 'vue'
import { allExercises, type Exercise } from '../api/exercises'

export const useExercisesStore = defineStore('exercises', () => {
	const exercises = ref<Exercise[]>(allExercises)

	const getExerciseById = (id: string) => {
		return exercises.value.find((e) => e.id === id)
	}

	return {
		exercises,
		getExerciseById,
	}
})