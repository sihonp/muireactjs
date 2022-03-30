import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';
import Dashboard from '../screens/Dashboard';
import Weather from '../screens/Weather';
import News from '../screens/News';
import TodoList from '../screens/TodoList';
import SlideShow from '../screens/SlideShow';
import Games from '../screens/Games';
import Login from '../screens/Login';

const Routes = ({ open, setOpen, mode, setMode, toggleDrawer }) => {
    return (
        <>
            <BrowserRouter>
                <Navbar
                    toggleDrawer={toggleDrawer}
                    mode={mode}
                    setMode={setMode}
                    setOpen={setOpen}
                    open={open}
                />
                <Sidemenu open={open} setOpen={setOpen} />
                <Switch>
                    <Route path='/dashboard' component={Dashboard} exact />
                    <Route path='/news' component={News} exact />
                    <Route path='/weather' component={Weather} exact />
                    <Route path='/todo-list' component={TodoList} exact />
                    <Route path='/login' component={Login} exact />
                    <Route path='/games' component={Games} exact />
                    <Route path='/slideShow' component={SlideShow} exact />
                    <Redirect from="/" to="/dashboard" exact />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes