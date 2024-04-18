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

			<v-container class="main-container">
				<v-card class="mb-4 card-container">
					<v-card-title class="card-title">
						<h2>{{ rocket.name }}</h2>
					</v-card-title>
					<v-card-text style="padding: 0;">
						<v-list>
							<v-list-item>
								<v-list-item-content>
									<v-list-item-subtitle class="discription">{{ rocket?.description
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Active</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.active ? 'Yes' : 'No'
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Company</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.company
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Country</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.country
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">First Flight</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.first_flight
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-card-title class="card-sub-title">
								<h4>Dimensions</h4>
							</v-card-title>
							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Diameter (feet)</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.diameter?.feet
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Diameter (meters)</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.diameter?.meters
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Height (feet)</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.height?.feet
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Height (meters)</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.height?.meters
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-card-title class="card-sub-title">
								<h4>Cost</h4>
							</v-card-title>
							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Cost per Launch</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.cost_per_launch
										}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Success Rate (%)</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.success_rate_pct
										}}%</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-content class="item">
									<v-list-item-title class="card-item-title">Stages</v-list-item-title>
									<v-list-item-subtitle class="card-item-ans">{{ rocket?.stages
										}}</v-list-item-subtitle>
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

	const isDisplayButton = (id: string) => {
		let data = favourite.getFavouritesList.filter((favourite: any) => {
			return favourite._value.id === id
		});
		return data.length !== 0 ? true : false
	}
	
</script>


<style scoped>
.main-container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-container {
	box-shadow: none;
	width: 70%;
	margin: auto;
}

.item {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid black;
	padding: 10px;
	/* background-color: rgb(193, 247, 247); */
}

.card-title {
	font-weight: 600;
}

.card-item-title {
	font-size: medium;
	font-weight: 600;
	display: block;
	width: 50%;
}

.card-item-ans {
	font-size: small;
	font-weight: 600;
	width: 100%;
	opacity: 1;
	text-align: end;
	color: gray;
}

.card-sub-title {
	margin-top: 40px;
}

.discription {
	width: 100%;
	display: block;
	font-size: medium;
	color: rgb(70, 70, 70);
	opacity: 1;
	line-height: 20px;
}

@media (max-width:776px) {
	.card-container {
		width: 100%;
	}

	.card-item-title {
		width: 100%;
	}
}
</style>