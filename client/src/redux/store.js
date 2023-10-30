import {configureStore} from "@reduxjs/toolkit"
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducers";
import { adminReducer } from "./reducers/adminReducer";
import { otherReducer } from "./reducers/otherReducer";

const store = configureStore({
reducer:{
    user:userReducer,
    profile:profileReducer,
    course:courseReducer,
    subscription:subscriptionReducer,
    admin:adminReducer,
    other:otherReducer
}
})

export default store;

export const server = "http://localhost:9000/api/v1"
