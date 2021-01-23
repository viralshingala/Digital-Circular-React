export const getTokenKey = () => {
	return Math.random().toString(36).substr(2)
}

export const categoryFilterSorting = {
	Dog: 0,
	Cat: 1,
	Fish: 2,
	Bird: 3,
	Reptile: 4,
	Smallpet: 5,
	Services: 6,
	Events: 7,
	All: 8
}

export const btnNavigationPriority = {
	bookNow: 0,
	buyOnline: 1,
	findStore: 2
}
