import React from 'react';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import { connect } from 'react-redux';

import getVisibleBlogs from '../selectors/blogs';;


const BlogList = (props)=>(
	<div>
		<Link to="/create">Add Blog</Link>
		{
		props.blogs.length === 0 ? (
			<div>
				<span>No blogs</span>
			</div>
		) : (
		props.blogs.map((b) => {
		return <BlogItem key={b.id} {...b}/>;
		})
		)
	}
	</div>
);

const mapStateToProps = (state) => {
	return {
		blogs: getVisibleBlogs(state.blogs, state.filters)
	};
}

export default connect(mapStateToProps)(BlogList);