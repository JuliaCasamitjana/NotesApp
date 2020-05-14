import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




const BlogItem =  ({title, createdAt, id}) =>(
	<div className='blogList__item'>
	<Link to = {{pathname: `/${id}`}}>
		<h2 className= 'blogList__title'>{title}</h2>  
		<p className= 'blogList__date'>{createdAt}</p>
	</Link>

	</div>
);


export default connect ()(BlogItem);