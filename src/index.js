import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.scss';

import reducers from './reducers';
import AllMembers from './containers/all_members';
import NavBar from './components/nav_bar';

// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// <Route exact path="/" component={dashboard} />
const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AllMembers} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('main'));
