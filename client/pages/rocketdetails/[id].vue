<template>
	<v-container v-if="rocket && rocket !== null">
		<div class="d-flex align-center">
				<v-icon icon="mdi-rocket" />
				<h2>SpaceX Rocket Details</h2>
			<div class="d-flex align-center ml-auto">
				<div class="d-inline-flex">
					<v-btn
						v-if="isDisplayButton(rocket.id)"
						class="ma-2"
						color="indigo"
						icon="mdi-heart"
						@click="removeFavourite()"
					></v-btn>
					<v-btn
						v-else="isDisplayButton(rocket.id)"
						class="ma-2"
						color="indigo"
						icon="mdi-heart-outline"
						@click="addFavourite()"
					></v-btn>
				</div>
			</div>
		</div>

			<v-container>
				<v-card elevation="16" style="padding: 20px !important;">
					<v-card-title>
						<h2>{{ rocket.name }}</h2>
					</v-card-title>
					<v-card-text>
						<v-list>
							<v-list-item>
								<v-list-item-content>
									<v-list-item-subtitle class="d-block text-medium-emphasis">{{ rocket?.description }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Active</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.active ? 'Yes' : 'No' }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Company</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.company }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Country</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.country }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">First Flight</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.first_flight }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-card-title class="mt-5">
								<h4>Dimensions</h4>
							</v-card-title>
							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Diameter (feet)</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.diameter?.feet }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Diameter (meters)</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.diameter?.meters }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Height (feet)</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.height?.feet }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Height (meters)</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.height?.meters }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-card-title class="mt-5">
								<h4>Cost</h4>
							</v-card-title>
							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Cost per Launch</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.cost_per_launch }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Success Rate (%)</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.success_rate_pct }}%</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>

							<v-list-item>
								<v-list-item-content class="d-flex justify-space-between align-center">
									<v-list-item-title class="text-medium font-weight-bold d-block ">Stages</v-list-item-title>
									<v-list-item-subtitle class="text-sm text-grey font-weight-bold text-align-end">{{ rocket?.stages }}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

						</v-list>
					</v-card-text>
				</v-card>
			</v-container>

	</v-container>

	<v-container v-else>
		<v-skeleton-loader :elevation="24" type="article"></v-skeleton-loader>
	</v-container>

</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue';
	import { useFavourite } from '../../stores/UseFavourite'

	let favourite = useFavourite();

	const route = useRoute();

	const query = gql`
	query Rocket($rocketId: ID!) {
		rocket(id: $rocketId) {
			active
			boosters
			company
			cost_per_launch
			country
			description
			diameter {
				feet
				meters
			}
			first_flight
			height {
				feet
				meters
			}
			id
			name
			type
			success_rate_pct
			stages
		}
	}`;	
	const { data } = useAsyncQuery<{
	rocket: {
		active: boolean
		boosters: Number
		company: String
		cost_per_launch: Number
		country: String
		description: String
		diameter: {
			feet: Number
			meters: Number
		}
		first_flight: String
		height: {
			feet: Number
			meters: Number
		}
		id: String
		name: String
		type: String
		success_rate_pct: Number
		stages: String
	}
	}>(query, { rocketId: route.params.id });

	let rocket = computed(() => data.value?.rocket ?? []);

	const addFavourite =  () => {
		favourite.add(rocket);
	}

	const removeFavourite = () => {
		favourite.remove(rocket);
	}

	const isDisplayButton = (id: String) => {
		let data = favourite.getFavouritesList.filter((favourite: any) => {
			return favourite._value.id === id
		});
		return data.length !== 0 ? true : false
	}
	
</script>
