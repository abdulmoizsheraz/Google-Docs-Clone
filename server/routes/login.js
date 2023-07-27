const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/user");
const bcrypt = require('bcrypt');
const JWT_SECRET = "moiz77131?1234"
const jwt = require('jsonwebtoken');
const app = express();
// Signing up user with Post req at route /api/signup
router.post('/', [
    body("email").isEmail().withMessage("Enter the Correct Email"),
    body("password").exists().withMessage("Password cannot be Empty")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.send("Try to Login with Correct Credentials");
        }
        const checkpassword = await  bcrypt.compare(req.body.password, user.password);
        if (!checkpassword) {
            res.send("Try to Login with Correct Credentials");
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.send(authtoken);
    } catch (err) {
        res.status(500).send("Error letting you in !");
    }
})

module.exports = router;
