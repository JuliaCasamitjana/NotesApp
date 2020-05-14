import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setOptionFilter } from '../actions/filters';


class BlogFilters extends React.Component{
	
	textOnChange = (e) =>{
		const text = e.target.value;
		this.props.setText(text)
	};

	selectOnChange = (e) =>{
		const sortBy = e.target.value;
		this.props.setOption(sortBy)
		
	};

	render(){
		return (
			<form className='content-container filters'>
				<input className='filters__boxes' onChange = {this.textOnChange}/> 
				<select className='filters__boxes' onChange = {this.selectOnChange}>
					<option>Date</option>
					<option>Title</option>
				</select>
			</form>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	setText: (text)=>dispatch(setTextFilter(text)),
	setOption: (sortBy)=>dispatch(setOptionFilter(sortBy))
});

export default connect(undefined, mapDispatchToProps)(BlogFilters);









