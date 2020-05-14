import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../actions/blogs';



class BlogAdd extends React.Component{

	state = {
		title:"",
		data: 0,
		content:""
	};
	
	onChangeTitle = (e) => {
		const title = e.target.value;
		this.setState(()=> ({title}));
	}

	onChangeContent = (e) =>{
		const content = e.target.value;
		this.setState(()=>({content}))
	}

	onSubmit = (e) => {
		e.preventDefault();
		const blog = this.state;
		this.props.addBlog(blog); 
		this.props.history.push('/');

	}  
	render(){
		return(
		<form className = 'content-container formBlog' onSubmit = {this.onSubmit} >
			<label htmlFor="title">Title</label>
			<input className='formBlog__title' type="text" name="title" value={this.state.title } onChange= {this.onChangeTitle}/>

			<textarea className='formBlog__content' type="text" name="content" value= {this.state.content} onChange= {this.onChangeContent}>
			</textarea>

			<button className= 'button'>Save Note</button>
		</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addBlog: (blog) => dispatch(addBlog(blog))
});
export default connect(undefined, mapDispatchToProps)(BlogAdd);




