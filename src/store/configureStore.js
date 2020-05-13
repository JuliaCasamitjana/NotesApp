import { createStore, combineReducers } from 'redux'; //Ens permet crear un container dels estats de les dades
import blogsReducer from '../reducers/blogs';
import filtersReducer from '../reducers/filters';
//Store creation  

export const saveToLocalStoreage = (state) => {
	try{
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch(e) {
		console.log(e)
	}
}

export const loadFromLocalStorage = () => {
	try{
		const serializedState = localStorage.getItem('state')
		if ( serializedState === null ) return undefinedreturn 
		return JSON.parse(serializedState)
	}catch(e) {
		console.log(e)
		return undefined
	}
};

const rootReducers = combineReducers({
	blogs: blogsReducer, 
		    filters: filtersReducer
})

const persistedState = loadFromLocalStorage();


const store = createStore(
	rootReducers,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
