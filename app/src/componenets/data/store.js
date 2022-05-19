import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './slices/counterSlice';
import showHideSlice from './slices/showHideSlice';

export default configureStore({
    reducer: {
        counter: counterSlice,
        showHide: showHideSlice,
    },
})