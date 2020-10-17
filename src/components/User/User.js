import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from 'react-router-dom';

import UserData from './UserData/UserData';
import UserEdit from './UserEdit/UserEdit';
import UserHistory from './UserHistory/UserHistory';

function User({ user }) {
    const match = useRouteMatch();

    return (
        <Router>
            <nav>
                <NavLink exact to={`${match.url}`}>Moje dane</NavLink>
                <NavLink exact to={`${match.url}/my_history`}>Historia moich zamówień</NavLink>
            </nav>
            <Switch>
                <Route exact path={`${match.url}`} render={() => <UserData user={user} />} />
                <Route path={`${match.url}/my_history`} render={() => <UserHistory user={user} />} />
                <Route path={`${match.url}/edit`} render={() => <UserEdit user={user} />} />
            </Switch>
        </Router >
    )
}

export default User;