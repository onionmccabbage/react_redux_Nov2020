import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "./App"
import reducer from "./store/reducer"

// Create a store
// A Redux store is where your app's state lives
const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")
// start by wrapping your entire application in a <Provider> component to make the store available throughout the component tree
// https://react-redux.js.org/api/hooks
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)