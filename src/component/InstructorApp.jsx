import React, { Component } from 'react';
import ListDeveloperComponent from './ListDeveloperComponent';
import ViewDeveloperComponent from './ViewDeveloperComponent';
import UpdateDeveloperComponent from './UpdateDeveloperComponent';
import CreateDeveloperComponent from './CreateDeveloperComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListDeveloperComponent} />
                        <Route path="/developers" exact component={ListDeveloperComponent} />
                        <Route path = "/view_developer/:id" component = {ViewDeveloperComponent} />
                        <Route path = "/edit_developer/:id" component = {UpdateDeveloperComponent} />
                        <Route path = "/insert_developer" component = {CreateDeveloperComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp