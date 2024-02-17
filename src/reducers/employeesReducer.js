import {SET_EMPLOYEES_DATA} from "@/actions/types/EmployeeTypes";
const initialState = {
    employeesData: [],
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES_DATA:
            return {
                ...state,
                employeesData: action.payload,
            };
            // we can add more action if needed
        default:
            return state;
    }
};

export default employeesReducer;
