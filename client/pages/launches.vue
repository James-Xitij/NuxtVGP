<template>
	<v-container>
		<h2>
			<v-icon icon="mdi-rocket" />
			SpaceX Details
		</h2>

		<h3 class="my-5">
			SpaceX Roket Launches
		</h3>
		<p class="mb-4">There are {{ launches?.length || 0 }} launches.</p>

		<template  v-if="launches && launches.length !== 0">
			<v-data-iterator
			:items="launches"
			:items-per-page="itemsPerPage"
		>
			<template v-slot:header="{ page, pageCount, prevPage, nextPage }">
				
				<div class="d-flex align-center">
					<div class="d-inline-flex">
						<v-btn
						:disabled="page === 1"
						class="me-2"
						icon="mdi-arrow-left"
						size="small"
						variant="tonal"
						@click="prevPage"
						></v-btn>

						<v-btn
						:disabled="page === pageCount"
						icon="mdi-arrow-right"
						size="small"
						variant="tonal"
						@click="nextPage"
						></v-btn>
					</div>
					<v-chip class="ml-4">{{ "Page  " + page +  "  of  " + pageCount }}</v-chip>

					<v-btn
						class="ma-2"
						color="red"
						@click="sortData('asc')"
					>
						Date(ASC)
						<v-icon
						icon="mdi-arrow-up"
						end
						></v-icon>
					</v-btn>

					<v-btn
						class="ma-2"
						color="red"
						@click="sortData('desc')"
					>
						Date(DESC)
						<v-icon
						icon="mdi-arrow-down"
						end
						></v-icon>
					</v-btn>

					<v-select v-model="year" :items="['',...years]" label="Filter by Year" variant="solo-filled" dense
						class="mt-5"></v-select>

				</div>
			</template>

			<template v-slot:default="{ items }">
			<v-row>
				<v-col
					v-for="(item, i) in items"
					:key="i"
					cols="12"
					sm="6"
					xl="3"
				>
				<v-sheet border>
					<iframe :src="getVideoLink(item?.raw?.links?.video_link)" height="300px" width="100%" title="Iframe Example"></iframe>
					
					<v-list-item
						:title="item.raw.mission_name"
						density="comfortable"
						lines="two"
					>
					<template v-slot:title>
						
						<div class="d-flex align-center">
							<strong class="text-h6 mr-auto">
								<NuxtLink :to="'/rocketdetails/'+item.raw.rocket.rocket.id">{{ item.raw.mission_name }}</NuxtLink>
							</strong>
							<v-btn
							text="true"
							class="ma-2"
							color="primary"
							:to="'/rocketdetails/'+item.raw.rocket.rocket.id"
						>
							View More
							</v-btn>
						</div>

					</template>
					</v-list-item>
					<v-table class="text-caption" density="compact">
					<tbody>
						<tr align="right">
						<th width="30%">Launch Date UTC:</th>

						<td width="70%">{{ getDate(item.raw.launch_date_utc) }}</td>
						</tr>

						<tr align="right">
						<th>Launch Site:</th>

						<td>{{ item.raw?.launch_site?.site_name ? item.raw?.launch_site?.site_name : 'Not Avalible' }}</td>
						</tr>

						<tr align="right">
						<th>Rocket:</th>

						<td>{{ item.raw.rocket.rocket_name }}</td>
						</tr>

						<tr align="right">
						<th style="height: 100px;">Details:</th>

						<td style="height: 100px;">{{ item?.raw?.details ? item.raw.details : '-----------' }}</td>
						</tr>

					</tbody>
					</v-table>
				</v-sheet>
				</v-col>
			</v-row>
			</template>
		</v-data-iterator>

		</template>

		<div v-else>
			<v-container>
				<v-row>
					<v-col
						cols="10"
						sm="5"
						class="mr-2"
					>
						<v-skeleton-loader :elevation="24" type="card-avatar"></v-skeleton-loader>
					</v-col>
					<v-col
						cols="10"
						sm="5"
						class="ml-2"
					>
						<v-skeleton-loader :elevation="24" type="card-avatar"></v-skeleton-loader>
					</v-col>
				</v-row>
			</v-container>
		</div>

	</v-container>

</template>

<script lang="ts" setup>

import { ref, computed } from 'vue';
import useSort from '../composables/useSort';
import useFilterByYear from '../composables/useFilterByYear'

	const itemsPerPage = ref(12)

	const query = gql`
	query Launches {
		launches {
				id
				mission_name
				launch_date_local
				launch_date_utc
				launch_site {
					site_name
					site_name_long
				}
				rocket {
					rocket_name
					rocket{
						id
					}
				}
				details
				links {
					flickr_images
					video_link
				}
				launch_year
		}
	}`;

	const { data } = useAsyncQuery<{
		launches: {
			id: String
			mission_name: String
			launch_date_local: String
			launch_date_utc: String
			launch_site: {
				site_name: String
				site_name_long: String
			}
			rocket: {
				rocket_name: String
				rocket: {
					id: String
				}
			}
			details: String
			links: {
                flickr_images: String[]
                video_link: String
            }
			launch_year: String
		}[]
	}>(query);
	let launches = computed(() => data.value?.launches ?? []);

	const sortData = (order: string) => {
		let data = useSort(launches, order);
	}

	const { years, selectedYear, filteredLaunches } = useFilterByYear(launches);
	const year = ref(selectedYear);

	watch(year, (oldValue, newValue) => {
		launches = filteredLaunches;
	},{
	immediate:true
	});

	const getDate = (dateData: any) => {
		let date = new Date(dateData);
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let year = date.getFullYear();
		return month + " - " + day + " - " + year;
	}

	const getVideoLink = (link?: string) => {
		if(link?.includes('youtu.be')){
			let linkData = link && link.split('youtu.be/');
			return `https://www.youtube.com/embed/${linkData[1]}`;	
		}else{
			let linkData = link && link.split('watch?v=');
			let finalLink = linkData && linkData[0]+'embed/'+linkData[1];
			return finalLink;
		}
	}

</script>
