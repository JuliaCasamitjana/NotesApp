export const setTextFilter = (text = '') =>({
		type: 'SET_TEXT_FILTER',
		text
});

export const setOptionFilter = (sortBy='date') =>({
	type: 'SORT_BY',
	sortBy
})