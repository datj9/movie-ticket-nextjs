import React from "react";
import { withIronSession } from "next-iron-session";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/user/action-types";

export function withAuthServerSideProps() {
    return withIronSession(
        async ({ req, res }) => {
            const user = req.session.get("user");

            if (!user) {
                res.statusCode = 404;
                res.end();
                return { props: { user: {} } };
            }

            return {
                props: { user },
            };
        },
        {
            cookieName: process.env.SESSION_COOKIE_NAME,
            cookieOptions: {
                secure: process.env.NODE_ENV === "production" ? true : false,
            },
            password: process.env.COOKIE_PASSWORD,
        }
    );
}

export default function withAuth(WrappedComponent) {
    return (props) => {
        const dispatch = useDispatch();

        dispatch({ type: SET_USER, payload: props.user });
        return <WrappedComponent {...props} />;
    };
}
