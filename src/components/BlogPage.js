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
	<div className = 'content-container'>
		<h1>{props.blog.title}</h1>
		<p className= 'blogPage__date'>{props.blog.createdAt}</p>
		<p className= 'blogPage__content'>{props.blog.content}</p>

		<button className='button button--remove' onClick = {onRemove}>
				Remove
		</button>
		<Link className='button button--edit' to = {{pathname: `edit/${props.blog.id}`}}>
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


