import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({ // this handles the reducer and hte action types for us
  reducer: {
    articles: articleReducer,
    comments: commentReducer // we can easily add any new data members to our store
  },
});
