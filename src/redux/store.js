import sagas from './sagas/';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';

/*ß
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const appMiddleware = (_store) => (next) => (action) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(sagas);
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares),
//   // other store enhancers if any
// );
store.subscribe(() =>
  console.log('_____STORE GETSTATE_____', store.getState()),
);

export const persistor = persistStore(store);
// persistor.purge();

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */
