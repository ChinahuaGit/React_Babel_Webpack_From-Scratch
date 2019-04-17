import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storageSession from "redux-persist/lib/storage/session";
// import thunk from "redux-thunk";
// import reducers from "./reducers";

const persistConfig = {
  key: "root",
//   storage: storageSession,
  blacklist: ["authenticationErrorStatus"]
};

// const persistedReducer = persistReducer(persistConfig, reducers);

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default () => {
  const store = createStoreWithMiddleware(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const persistor = persistStore(store);
  return { store, persistor };
};
