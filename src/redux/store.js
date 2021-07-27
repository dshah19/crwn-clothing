import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
import rootReducer from "./root-reducer";

const middelewares = [];

if(process.env.NODE_ENV == 'development') {
    middelewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middelewares));
export const persistor = persistStore(store);
export default { store, persistor };