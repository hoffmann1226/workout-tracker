import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga(){
  yield takeEvery('GET_CHEST', getChest)
}

function* getChest (){
  try{
    let response = yield axios.get(`/chest`)
    console.log('in get chest saga', response.data)
    yield put({
      type: 'SET_CHEST',
      payload: response.data
    })
  } catch(error){
    console.log('problem with get chest saga', error)
  }
}

const chestReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHEST':
      return action.payload;
    default:
      return state;
  }
}

//store instance and combine reducers
const storeInstance = createStore(
    combineReducers({
      chestReducer
    }),
    applyMiddleware(logger)
  );

  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
