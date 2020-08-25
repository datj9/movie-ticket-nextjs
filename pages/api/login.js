import { withIronSession } from "next-iron-session";
import nextConnect from "next-connect";
import dbMiddleware from "../../middlewares/database";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcryptjs";

const cookieName = process.env.SESSION_COOKIE_NAME;
const cookiePassword = process.env.COOKIE_PASSWORD;
const handler = nextConnect();

handler.use(dbMiddleware).post(async (req, res) => {
    const { email, password } = req.body;
    const errors = {};

    if (!email) errors.email = "email is required";
    if (!password) errors.password = "password is required";
    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    if (!isEmail(email + "")) errors.email = "email is invalid";
    if (typeof password != "string" || password.length < 8 || password.length > 20)
        errors.password = "password is invalid";
    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    try {
        const user = await req.db.collection("user").findOne({ email });
        if (!user) return res.status(400).json({ email: "email does not exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ password: "password does not match" });

        req.session.set("user", { email, name: user.name, userType: user.userType });
        await req.session.save();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json(error);
    }
});

export default withIronSession(handler, {
    cookieName,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: cookiePassword,
});
