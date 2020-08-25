import * as actionTypes from "./action-types";
import fetch from "isomorphic-unfetch";

export const signUp = (user) => async (dispatch) => {
    dispatch({ type: actionTypes.SIGN_UP_START });

    const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (res.ok) {
        dispatch({
            type: actionTypes.SIGN_UP_SUCCESS,
        });
    } else {
        dispatch({
            type: actionTypes.SIGN_UP_FAIL,
        });
    }
};

export const signIn = (user) => async (dispatch) => {
    dispatch({ type: actionTypes.SIGN_IN_START });

    const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (res.ok) {
        dispatch({
            type: actionTypes.SIGN_IN_SUCCESS,
        });
    } else {
        dispatch({
            type: actionTypes.SIGN_IN_FAIL,
        });
    }
};

export const logOut = () => async (dispatch) => {
    dispatch({ type: actionTypes.LOG_OUT_START });
    const res = await fetch("/api/logout", {
        method: "GET",
    });
    console.log(res);
    dispatch({
        type: actionTypes.LOG_OUT_SUCCESS,
    });
};
