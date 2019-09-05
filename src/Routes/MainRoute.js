import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function MainRouter() {
    return (
        <BrowserRouter>
            <Route path="/login" component={() => <div>hello</div>} />
        </BrowserRouter>
    );
}

export default MainRouter;