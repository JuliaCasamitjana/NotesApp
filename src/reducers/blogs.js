const blogsReducerDefaultState=[];

export default (state = blogsReducerDefaultState, action) =>{
	switch(action.type){
		case'ADD_BLOG':
			return [action.blog, ...state];
		case 'EDIT_BLOG':
			return state.map((b) => {
				if (b.id === action.id){
					return{
						...b, 
						...action.updates
					};
				}else{
					return b;
				};
			});
		case 'REMOVE_BLOG':
			return state.filter(({id}) => (id!==action.id))
		default:
			return state;
	}
}