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
  yield takeEvery('GET_SHOULDERS', getShoulders)
};

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

function* getShoulders (){
  try{
    let response = yield axios.get(`/shoulders`)
    console.log('in get shoulders saga', response.data)
    yield put ({
      type: 'SET_SHOULDERS',
      payload: response.data
    })
  } catch(error){
    console.log('problem with get chest saga', error)
  }
}

const sagaMiddleware = createSagaMiddleware();

const chestReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHEST':
      return action.payload;
    default:
      return state;
  }
}

const shouldersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHOULDERS':
      return action.payload;
    default:
      return state;
  }
}

//store instance and combine reducers
const storeInstance = createStore(
    combineReducers({
      chestReducer,
      shouldersReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);
  
  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
