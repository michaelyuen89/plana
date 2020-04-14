import React from 'react';
import { Route, Switch, Link, withRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import HomeContainer from './home/home_container';
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import TasksContainer from './tasks/tasks';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute path="/home" component={HomeContainer} />
            <ProtectedRoute path="/tasks" component={TasksContainer} />
        </Switch>
    </div>
);

export default App;
