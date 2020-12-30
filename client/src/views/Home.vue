<style>
	.home {
		height: 100vh;
	}
	.vc-container {
		background-color: transparent!important;
		color: var(--white)!important;
		border: none!important;
		border-radius: 0px!important;
	}
	.vc-weekday,
	.vc-title {
				color: var(--white)!important;
	}
</style>

<template>
	<div class="home">
		<Header userImg=""></Header>
		<v-date-picker
			class="calendar"
			:value="null"
			:columns="layout.columns"
			:rows="layout.rows"
			:is-expanded="layout.isExpanded"
			/>
			<SwipeCard :meetings = "meetings">
			</SwipeCard>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SwipeCard from "@/components/SwipeCard.vue";

export default {
	name: "home",
	components: {
		Header,
		SwipeCard
	},
	data() {
		return {
			meetings: []
		}
	},
	mounted() {
    this.meetings = [
      {
        title: "Marketing meeting",
				schedule: "8:00 AM - 10:00 AM",
				description: 'Talk about Inbound'
      }
    ];
  },
	computed: {
		layout() {
			return this.$screens(
				{
					default: {
						columns: 1,
						rows: 1,
						isExpanded: true,
					},
					sm: {
						columns: 1,
						rows: 2,
						isExpanded: false,
					},
					lg: {
						columns: 4,
						rows: 2,
						isExpanded: false,
					},
				},
			);
		}
}
};
</script>
