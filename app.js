const express = require("express");
const {i} = require("joi");

const app = express();
app.use(express.json());

const schema = i.object({
    name: i.string().required(),
    email: i.string().email().required(),
    password: i.string().min(6).required(),
    address: i.string().required(),
    gender: i.string().gender("Male", "Female").required()
});
const result = singup schema.safeparse (req.body);

app.post=(schema) => (req, res,next) => {
    const { error } = schema.safeparse(req.body);

    if (!result.success) {
     const error = result.error.issue.map(i) => {
        field = i.path.json('.'),
        message = i.message,
    }};
    return res.status(400).json ({errors});

}
req.body = result. data;
next();
;
