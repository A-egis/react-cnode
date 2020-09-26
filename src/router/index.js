import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Index from '@v/index/index'
import GetStart from '@v/getstart/index'
import About from '@v/about/index'
import Topic from '@v/topic/index'
import User from '@v/user/index'
class RouterIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/index/all" />} />
                <Route path="/index/:type" component={Index} />
                <Route path="/getstart" component={GetStart} />
                <Route path="/about" component={About} />
                <Route path="/topic/:id" component={Topic} />
                <Route path="/user/:id" component={User} />
            </Switch>
        )
    }
}
export default RouterIndex