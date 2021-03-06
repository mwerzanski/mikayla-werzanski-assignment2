import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import SimulationComponent from './SimulationComponent';
import NavbarComponent from './NavbarComponent';
import reducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AboutComponent from './AboutComponent';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <NavbarComponent />
            <Route exact path="/" component={HomeComponent} />
            <Route
                path="/SimulationComponent"
                component={SimulationComponent}
            />
            <Route path="/AboutComponent" component={AboutComponent} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
