import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




const BlogItem =  ({title, createdAt, id}) =>(
	<div>
	<Link to = {{pathname: `/${id}`}}>
		{title} - 
		{createdAt}
	</Link>

	</div>
);


export default connect ()(BlogItem);