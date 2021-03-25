import { ADD_EMPLOYEE } from "./ContentTypes";
import { UPDATE_EMPLOYEE } from "./ContentTypes";
import { DELETE_EMPLOYEE } from "./ContentTypes";


const initialState = {
    employees: [],
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            const employeesAdd = [...state.employees];
            if ((state.employees.some(employee => employee.employeeName === action.payload.employeeName)) && (state.employees.some(employee => employee.employeeRole === action.payload.employeeRole) ) ){
                console.log("entered")
            }
            else {
                employeesAdd.push(action.payload);
            }
            console.log("e arr", employeesAdd)
            return {
                ...state,
                employees: employeesAdd,
            }
        case UPDATE_EMPLOYEE:
            const employeesUpdate = [...state.employees];
            employeesUpdate[action.index] = action.payload;
            console.log("up em", employeesUpdate);
            return {
                ...state,
                employees: employeesUpdate,
            }

        case DELETE_EMPLOYEE:
            const employeeDelete = [...state.employees];
            employeeDelete.splice(action.index, 1);
            console.log("del em", employeeDelete);
            return {
                ...state,
                employees: employeeDelete,
            }


        default: return state;
    }
}

export default contentReducer;