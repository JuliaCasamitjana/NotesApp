import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import BlogDashboard from '../components/BlogDashboard';
import BlogAdd from '../components/BlogAdd';
import BlogPage from '../components/BlogPage';
import BlogEdit from '../components/BlogEdit';


const AppRouter = () => (
<BrowserRouter>
	<div>
		<Header />
		<Switch>
			<Route path="/" component = { BlogDashboard } exact={true}/>
			<Route path="/create" component = { BlogAdd } />
			<Route path="/edit/:id" component = { BlogEdit } />
			<Route path="/:id" component = { BlogPage } />
		</Switch>
	</div>
</BrowserRouter>
);

 export default AppRouter;