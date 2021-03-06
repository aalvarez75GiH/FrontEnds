import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import App from './App';
import MyApp from './myApp';
import reportWebVitals from './reportWebVitals';
// import { authReducer } from './reducers/authReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   auth: authReducer
// })

// const store = createStore(
//   rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk))
// )

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(<MyApp />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
