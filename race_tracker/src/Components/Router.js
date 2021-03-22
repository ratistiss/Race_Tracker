import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Standings from './Standings'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Standings} />
            <Route exact path="/AddResults"/>
            <Route path='*'/>
        </Switch>
    )
}

export default Router;