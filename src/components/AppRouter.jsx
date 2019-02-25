import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from './Register'
import LoginForm from './Login'

const ApplicationRouter = (props) => {
    return (
        <Switch>
            <Route path="/register" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
        </Switch>
    )
}

export default ApplicationRouter