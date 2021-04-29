import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleWare))(createStore)(
  rootReducer,
);

sagaMiddleWare.run(rootSaga);

export default store;
