import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {ApplicationLayout} from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./configureStore";
import {PersistGate} from 'redux-persist/integration/react';

// configure and create the store
const initialState = {};
const {store, persistor} = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApplicationLayout/>
        </PersistGate>
    </Provider>, document.getElementById("root"));
registerServiceWorker();
