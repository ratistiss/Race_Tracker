import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Standings from './Standings'
import Form from './Form'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Standings} />
            <Route exact path="/AddResults" component={Form}/>
            <Route path='*'/>
        </Switch>
    )
}

export default Router;