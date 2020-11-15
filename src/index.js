import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import SimulationComponent from './SimulationComponent';
import NavbarComponent from './NavbarComponent';
import reducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <NavbarComponent />
            <Route exact path="/" component={HomeComponent} />
            <Route
                path="/SimulationComponent"
                component={SimulationComponent}
            />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
