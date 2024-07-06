import { configureStore } from '@reduxjs/toolkit';
import PagesReducers from './reducers/PagesReducers';

const store = configureStore({
    reducer: {
        pages: PagesReducers,
    },
});
  
export default store;