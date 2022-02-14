
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
/*import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import userReducer from './reducers/user'
const store=configureStore(
    {
        reducer:{
            user:userReducer,
           
        }
    }
)*/
ReactDOM.render(
//<Provider store={store}>
<>
<App></App>
</>
//</Provider>,
,document.getElementById("root"))
