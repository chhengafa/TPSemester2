const { user } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async(email, password, req, res) => {
    try {
        const userFind = await user.findOne({
            email
        });
        if (userFind == null) {
            res.json({ success: "false", message: "Email or password is incorrect" });

        }
        // console.log(userFind.email);
        if (userFind.email != email) {
            res.json({ success: "false", message: "Email or password is incorrect" })
        } else {
            if (!bcrypt.compareSync(password, userFind.password)) {
                res.json({ success: "false", message: "Email or password is incorrect" });
            } else {
                const SECRET_KEY = "YOURSECRETKEYGOESHERE";
                const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '2h' });
                //add token(cookie)
                res.cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    expires: new Date(Date.now() + 7200000), //expires 2h
                }).res.json({ success: "true", message: "Log in successful", data: userFind });
            }
        }
    } catch (error) {
        res.json({ success: "false", message: error })
    }
}
module.exports = {
    login,
}