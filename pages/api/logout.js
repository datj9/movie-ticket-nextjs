import { withIronSession } from "next-iron-session";

const cookieName = process.env.SESSION_COOKIE_NAME;
const cookiePassword = process.env.COOKIE_PASSWORD;

function handler(req, res, session) {
    req.session.destroy();
    res.send("Logged out");
}

export default withIronSession(handler, {
    cookieName,
    password: cookiePassword,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});
