import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Blog from '../pages/Blog';

const getRouter = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/blog">博客页面</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default getRouter;
