import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { InputBox } from '../Components'

function MainRouter() {
    return (
        <BrowserRouter>
            <Route path="/login" component={InputBox} />
        </BrowserRouter>
    );
}

export default MainRouter;