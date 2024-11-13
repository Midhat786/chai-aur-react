import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import an existing reducer

const store = configureStore({
    reducer: {
        auth: authReducer, // Add your reducer here
    }
});

export default store;
