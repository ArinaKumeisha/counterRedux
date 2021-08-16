import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from "react-redux";
import {store} from "./Redux-store/store";
import {App} from "./App";


ReactDOM.render(

<Provider store={store}>
    <div className={'Fon'}>
    <App/>
    </div>
    </Provider>,document.getElementById('root'));



