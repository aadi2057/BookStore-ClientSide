import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Books } from "./books";
import { Auth } from "./auth";
import { Comments } from "./comments";
import { Favourites } from "./favourites";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { AddBook } from "./forms";
import { createForms } from "react-redux-form";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      books: Books,
      auth: Auth,
      comments: Comments,
      favourites: Favourites,
      ...createForms({
        addbook: AddBook,
      }),
    }),
    compose(
      composeWithDevTools(applyMiddleware(...[thunk, logger]))
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
