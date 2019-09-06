import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RadioButton, InputBox } from '../Components'

function MainRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/taskone" component={InputBox} />
                <Route path="/" component={RadioButton} />
            </Switch>
        </BrowserRouter>
    );
}

export default MainRouter;