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
  yield takeEvery('GET_LEGS', getLegs)
  yield takeEvery('GET_CORE', getCore)
  yield takeEvery('GET_CST', getCst)
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
    console.log('problem with get shoulders saga', error)
  }
}

function* getLegs(){
  try{
    let response = yield axios.get(`/legs`)
    console.log('in get legs saga', response.data)
    yield put ({
      type: 'SET_LEGS',
      payload: response.data
    })
  } catch(error){
    console.log('problem with get legs saga', error)
  }
}

function* getCore(){
  try{
    let response = yield axios.get(`/core`)
    console.log('in get core saga', response.data)
    yield put ({
      type: 'SET_CORE',
      payload: response.data
    })
  } catch(error){
    console.log('problem with get core saga', error)
  }
}

function* getCst(){
  try{
    let response = yield axios.get(`/core`);
    console.log('in get cst saga', response.data)
    yield put ({
      type: 'SET_CST',
      payload: response.data
    })
  }
  catch(error){
    console.log('problem with cst saga', error)
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

const legsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LEGS':
      return action.payload;
    default:
      return state
  }
}

const coreReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CORE':
      return action.payload;
      default:
        return state
  }
}

//store instance and combine reducers
const storeInstance = createStore(
    combineReducers({
      chestReducer,
      shouldersReducer,
      legsReducer,
      coreReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);
  
  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
