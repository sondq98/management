import { combineReducers } from "redux";
import branchReducer from "./branch/reducer";
import profileReducer from "./profile/reducer";
import companyReducer from "./company/reducer";

const rootReducer = combineReducers(
    Object.assign({
        branchReducer,
        profileReducer,
        companyReducer,
    })
);

export default rootReducer;