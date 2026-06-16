import exercisesData from '../data/exercises.json'

export interface Exercise {
	id: string
	i18nKey: string
	unit: 'reps' | 'seconds'
}

export const allExercises = exercisesData as Exercise[]