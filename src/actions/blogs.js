import moment from 'moment';
import uuid from 'react-uuid';

export const addBlog = (
	{
		title = "",
		content = "",

	} = {}
) => ({
		type:'ADD_BLOG',
		blog:{
			title, 
			content,
			createdAt: moment().format('D MMM YYYY, h:mm'),
			id: uuid()
		}
});

export const editBlog = (id, updates) =>({
	type:'EDIT_BLOG',
	id,
	updates
})

export const removeBlog = (id) =>({
	type:'REMOVE_BLOG',
	id
});