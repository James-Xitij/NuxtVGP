<template>
	<v-container>
		<div class="d-flex align-center">
				<v-icon icon="mdi-rocket" />
				<h2>SpaceX Favourite Rockets</h2>
			<div class="d-flex align-center ml-auto">
				<div class="d-inline-flex">
					<div class="ml-auto">
						<v-btn
							class="ma-2"
							color="red"
							@click="removeAll()"
						>
							Remove All
							<v-icon
							icon="mdi-playlist-remove"
							end
							></v-icon>
						</v-btn>
					</div>
				</div>
			</div>
		</div>

		<div v-if="favourite.getFavouritesList && favourite.getFavouritesList !== null && favourite.getFavouritesList.length !== 0 " class="mt-4 mr-auto">
			<div
				v-for="(item, i) in favourite.getFavouritesList"
				:key="i"
				>
				<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title v-slot="{ expanded }">
						<v-row no-gutters>
						<v-col class="d-flex justify-start" cols="4">
							Rocket Name
						</v-col>
						<v-col
							class="text--secondary"
							cols="8"
						>
							<v-fade-transition leave-absolute>
							<span
								v-if="expanded"
								key="0"
							>
							</span>
							<span
								v-else
								key="1"
							>
								{{ item._value.name }}
							</span>
							</v-fade-transition>
						</v-col>
						</v-row>
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<v-row no-gutters>
							<v-col>
								<v-table>
									<tbody>
									<tr>
										<td>Company Name</td>
										<td>{{ item._value.company }}</td>
									</tr>
									<tr>
										<td>First Flight</td>
										<td>{{ item._value.first_flight }}</td>
									</tr>
									<tr>
										<td>Success Rate Percentage</td>
										<td>{{ item._value.success_rate_pct }}</td>
									</tr>
									<tr>
										<td>Cost Per Launch</td>
										<td>{{ item._value.cost_per_launch }}</td>
									</tr>
									<tr>
										<td>Country</td>
										<td>{{ item._value.country }}</td>
									</tr>
									<tr>
										<td>Description</td>
										<td>{{ item._value.description }}</td>
									</tr>
									</tbody>
								</v-table>
							</v-col>
						</v-row>

						<v-card-actions>
						<v-spacer></v-spacer>

						</v-card-actions>
					</v-expansion-panel-text>
				</v-expansion-panel>
				</v-expansion-panels>
				<br>
			</div>
		</div>

		<div v-else>
			No Favourite Roket Found In List
		</div>

	</v-container>

</template>

<script lang="ts" setup>

import { useFavourite } from '../stores/UseFavourite'

let favourite = useFavourite();

const removeAll = () => {
	favourite.removeAllFavourite();
}

</script>
