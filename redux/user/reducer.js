import { HYDRATE } from "next-redux-wrapper";
import * as actionTypes from "./action-types";

const INITIAL_STATE = {
    isLoading: false,
    errors: {},
    currentUser: {},
    isAuthenticated: false,
    message: "",
};

// create your reducer
export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case HYDRATE:
            const stateDiff = diff(state, action.payload);
            const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X");

            return { ...state, ...action.payload, page: wasBumpedOnClient ? state.page : action.payload.page };
        case actionTypes.SIGN_IN_START:
            return { ...state, isLoading: true };
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
            };
        case actionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case actionTypes.SIGN_UP_START:
            return { ...state, isLoading: true };
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
            };
        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case actionTypes.LOG_OUT_SUCCESS:
            return {
                ...state,
                currentUser: {},
                isAuthenticated: false,
                message: "logged out success",
            };
        case actionTypes.SET_USER:
            return {
                ...state,
                currentUser: { ...action.payload },
                isAuthenticated: true,
            };
        default:
            return state;
    }
}
