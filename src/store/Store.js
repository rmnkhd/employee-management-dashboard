import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../reducers/employeesReducer';

export const Store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
});
