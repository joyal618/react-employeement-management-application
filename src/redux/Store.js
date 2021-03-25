import {createStore} from "redux";
import ContentReducer from "./content/ContentReducer";

const store = createStore(ContentReducer)

export default store;