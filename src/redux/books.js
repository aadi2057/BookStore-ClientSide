import * as ActionTypes from "./ActionTypes";

export const Books = (
  state = {
    isLoading: true,
    errMess: null,
    books: [],
    deleteSuccess: false,
    deleteErr: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        books: action.payload,
        deleteSuccess: false,
      };

      case ActionTypes.UPLOAD_BOOK:
        return {
          ...state,
          isLoading: false,
          errMess: null,
          books: state.books.concat(action.payload),
          deleteSuccess: false,
        };

    case ActionTypes.BOOKS_LOADING:
      return { ...state, isLoading: true, errMess: null, deleteSuccess: false };

    case ActionTypes.BOOKS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.BOOK_DELETE:
      const bookId = action.id;
      const newlist = state.books.filter((book) => book._id !== bookId)
      return {
        ...state,
        isLoading: false,
        errMess: null,
        deleteSuccess: action.payload,
        books: newlist
      };

    case ActionTypes.DELETE_FAILED:
      return { ...state, deleteErr: action.payload };

    // case ActionTypes.EDIT_BOOK:
    //     return {...state, isLoading: false, errMess: null, book: action.payload};

    default:
      return state;
  }
};
