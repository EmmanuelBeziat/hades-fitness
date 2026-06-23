import exercisesData from '../data/exercises.json'

export interface Exercise {
	id: string
	i18nKey: string
	targetMuscle: 'chest' | 'legs' | 'abs' | 'shoulders' | 'arms' | 'back' | 'cardio'
	unit: 'reps' | 'seconds'
}

export const allExercises = exercisesData as Exercise[]