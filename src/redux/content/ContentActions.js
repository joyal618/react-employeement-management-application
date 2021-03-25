import { ADD_EMPLOYEE } from "./ContentTypes";
import { UPDATE_EMPLOYEE } from "./ContentTypes";
import { DELETE_EMPLOYEE } from "./ContentTypes";

export const addEmployee = (payload) => {
    return {
        type: ADD_EMPLOYEE,
        payload,
    }
}

export const updateEmployee = (payload,index) => {
    return {
        type: UPDATE_EMPLOYEE,
        payload,
        index,
    }
}

export const deleteEmployee = (index) => {
    return {
        type: DELETE_EMPLOYEE,
        index,
    }
}

