
//Get visible blogs
export default (blogs, {text, sortBy}) => {
return blogs.filter((b) => {
	return b.title.toLowerCase().includes(text.toLowerCase())  
}).sort((a, b)=>{ 
	if (sortBy === 'Title'){
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();
		return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
	} else if (sortBy === 'Date'){

		return (a.createdAt < b.createdAt) ? -1 : (a.createdAt > b.createdAt) ? 1 : 0;
	}
})
};