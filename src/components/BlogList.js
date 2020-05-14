import React from 'react';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import { connect } from 'react-redux';

import getVisibleBlogs from '../selectors/blogs';;


const BlogList = (props)=>(
	<div className='content-container'>
		<div className='blogList'>
			<Link className='button' to="/create">Add Note</Link>
			{
			props.blogs.length === 0 ? (
				<div>
					<span>No notes</span>
				</div>
			) : (
			props.blogs.map((b) => {
			return <BlogItem key={b.id} {...b}/>;
			})
			)
		}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		blogs: getVisibleBlogs(state.blogs, state.filters)
	};
}

export default connect(mapStateToProps)(BlogList);