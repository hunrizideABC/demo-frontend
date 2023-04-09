import React, { Component } from 'react';
import ListDeveloperComponent from './ListDeveloperComponent';
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
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp