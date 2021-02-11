import { createStore, applyMiddleware, compose } from 'redux';
import logMiddleware from './logMiddleware';
import reducer from './reducer';

const middlewares = applyMiddleware(logMiddleware);

const devTools = [];

// eslint-disable-next-line no-underscore-dangle
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-next-line no-underscore-dangle
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancers = compose(middlewares, ...devTools);

const store = createStore(reducer, enhancers);

export default store;
