import {SET_EMPLOYEES_DATA} from "@/actions/types/UserTypes";

export const setEmployeesData = (data) => ({
    type: SET_EMPLOYEES_DATA,
    payload: data,
});


