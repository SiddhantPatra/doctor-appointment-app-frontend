import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  "./index.css";
import { Provider } from "react-redux";
import { reducers } from "./redux/reducers";
// import thunk from "redux-thunk"
import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware, compose} from "redux"
import { GoogleOAuthProvider } from "@react-oauth/google";
import { configureStore } from "@reduxjs/toolkit";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

const store = configureStore({
  reducer: {
    reducer: reducers,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider
          clientId={`414186732077-31rbm6haqq4vetaegji4jssi0edbqlmo.apps.googleusercontent.com`}
        >
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
