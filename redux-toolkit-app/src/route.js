import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Articles from './features/Articles/Articles'
import ArticleDetail from './features/ArticleDetail/ArticleDetail'

// React Routing in use - here we have two routes defined
const Routes = () => {
    return (
      <Router>
        <Switch>
          {/* the root route */}
          <Route exact path="/">
            <Articles />
          </Route>
          {/* route to details passing id as only parameter*/}
          <Route path="/article/:id">
            <ArticleDetail />
          </Route>
        </Switch>
      </Router>
    );
  };
  export default Routes