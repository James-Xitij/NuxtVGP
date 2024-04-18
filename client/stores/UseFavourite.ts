export const useFavourite = defineStore('favourites', {
	state: () => ({ favourites: [] }),
	getters: {
		getFavouritesList: (state) => state.favourites,
	},
	actions: {
		add(dataToAdd: any) {
			//@ts-ignore
			this.$state.favourites.push(dataToAdd)
		},
		remove(dataToRemove: any) {
			//@ts-ignore
			let data = this.$state.favourites.filter((item: any) => {
				return item.id !== dataToRemove.id
			})
			this.$state.favourites = data
		},
		removeAllFavourite() {
			console.log(this.$state.favourites);
			this.$state.favourites = [];
		},
	},
})
