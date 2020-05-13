import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeBlog } from '../actions/blogs';


const BlogPage = (props) =>{

	const onRemove = () =>{
		props.removeBlog(props.blog.id);
		props.history.push('/')
	};
	
	return (
	<div>
		{props.blog.title} -
		{props.blog.createdAt} -
		{props.blog.content}

	<button onClick = {onRemove}>
			Remove
	</button>
	<Link to = {{pathname: `edit/${props.blog.id}`}}>
		Edit
	</Link>

	</div>
	);
}

const mapStateToProps = (state, props) => {
	return {
		blog: state.blogs.find((b) => b.id === props.match.params.id)
	};
}

const mapDispatchToProps = (dispatch) => ({
	removeBlog: (id) => dispatch (removeBlog(id))
})

export default connect(mapStateToProps, mapDispatchToProps )(BlogPage);


