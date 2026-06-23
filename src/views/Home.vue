<template>
	<div class="home">
		<h1>Hades Fitness</h1>
		<div class="reward-grid">
			<RewardButton v-for="reward in rewardsStore.allRewards" :key="reward.id" :icon="reward.id" :label="t(reward.i18nKey)" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import RewardButton from '@/components/buttons/RewardButton.vue'
import { useRewardsStore } from '@/stores/rewards'

const { t } = useI18n()
const rewardsStore = useRewardsStore()
</script>

<style scoped>
h1 {
	text-align: center;
	margin-block: 0;
	font-size: 4rem;
}

.reward-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	gap: 2rem 1rem;
	padding: 1rem;
}
</style>
