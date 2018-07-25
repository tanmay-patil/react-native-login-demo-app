import React, { Component } from 'react';
import App from "./App/App";
import store from "./App/store/configureStore";
import { Provider } from "react-redux";

export default class Root extends Component {

    render() {
        return (

            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
