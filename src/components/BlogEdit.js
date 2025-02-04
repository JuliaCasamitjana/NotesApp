import React from 'react';
import { connect } from 'react-redux';
import { editBlog } from '../actions/blogs';

class BlogEdit extends React.Component{

	state = {
		title: this.props.blog.title,
		data: this.props.blog.createdAt,
		content:this.props.blog.content
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
		const id = this.props.blog.id;
		this.props.editBlog(id, this.state); 
		this.props.history.push({pathname: `/${this.props.blog.id}`});

	}  
	render(){
		return(
		<form className = 'content-container formBlog' onSubmit = {this.onSubmit} >
			<label htmlFor="title">Title</label>
			<input className='formBlog__title' type="text" name="title" value={this.state.title } onChange= {this.onChangeTitle}/>

			<textarea className='formBlog__content' type="text" name="content" value= {this.state.content} onChange= {this.onChangeContent}>
			</textarea>

			<button className='button button--save'>Save Changes</button>

		</form>
		);
	}
}
const mapStateToProps = (state, props) =>({
	blog: state.blogs.find((b) => b.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
	editBlog: (id, updates) => dispatch(editBlog(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogEdit);




