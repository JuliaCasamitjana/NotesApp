import React from 'react'; //Ens deixa escriure templates amb JSX
import ReactDOM from 'react-dom'; //Ens deixa renderitzar les templates al DOM
import { Provider } from 'react-redux'; //Proporciona la store a AppRouter
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; //Llibreria per crear routes
import { addBlog } from './actions/blogs';

import store from './store/configureStore'; //Allà on hem definit la store
import { saveToLocalStoreage } from './store/configureStore';
import AppRouter from './routers/AppRouter'; //Allà on hem definit les rutes
import './styles/styles.scss';
import 'normalize.css/normalize.css';


store.subscribe(() => 
	  saveToLocalStoreage(store.getState())
	);

const jsx = (
	<Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


