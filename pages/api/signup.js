import { withIronSession } from "next-iron-session";
import nextConnect from "next-connect";
import dbMiddleware from "../../middlewares/database";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcryptjs";

const cookieName = process.env.SESSION_COOKIE_NAME;
const cookiePassword = process.env.COOKIE_PASSWORD;
const handler = nextConnect();

handler.use(dbMiddleware).post(async (req, res) => {
    const { email, name, password } = req.body;
    const errors = {};

    if (!email) errors.email = "email is required";
    if (!name) errors.name = "name is required";
    if (!password) errors.password = "password is required";
    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    if (!isEmail(email + "")) errors.email = "email is invalid";
    if (typeof name != "string" || name.length < 2) errors.name = "name is invalid";
    if (typeof password != "string" || password.length < 8 || password.length > 20)
        errors.password = "password is invalid";
    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    try {
        const user = await req.db.collection("user").findOne({ email });
        if (user) return res.status(400).json({ email: "email already exists" });

        const hash = await bcrypt.hash(password, 8);
        await req.db.collection("user").insertOne({ email, name, password: hash, userType: "client" });
        req.session.set("user", { email, name, userType: "client" });
        await req.session.save();
        return res.status(201).json({});
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
