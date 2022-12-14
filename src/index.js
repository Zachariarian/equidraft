import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./components/Store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
  <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();