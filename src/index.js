import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/appReducer';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(reduxThunk) );

ReactDOM.render( 
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();