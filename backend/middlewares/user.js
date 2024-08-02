const authenticateUserSignin = (req, res, next) => {
    const body = req.body;
    if (!body.name || !body.username || !body.email || !body.password || !body.region) {
        return res.json({ message: "All Fields are required !!" });
    } else if (body.email.slice(-10,) !== "@gmail.com") {
        return res.json({ message: "Enter valid email id !!" });
    } else if (body.password.length < 8 || !/\d/.test(body.password) || !/[a-z]/.test(body.password) || !/[A-Z]/.test(body.password) || !/[\W_]/.test(body.password)) {
        return res.json({ message: "Enter a valid password !!" });
    } else {
        next();
    }
};

const authenticateUserLogin = (req, res, next) => {
    const body = req.body;
    if (!body.username || !body.password) {
        return res.json({ message: "All Fields are required !!" });
    } else if (body.password.length < 8 || !/\d/.test(body.password) || !/[a-z]/.test(body.password) || !/[A-Z]/.test(body.password) || !/[\W_]/.test(body.password)) {
        if (body.password)
            return res.json({ message: "Enter valid credentials !!" });
    } else {
        next();
    }
};

const authenticateUpdatedData = (req, res, next) => {
    if (req.method === "POST") {
        const body = req.body;
        if (!body.name || !body.username || !body.email || !body.password || !body.region) {
            return res.json({ message: "All Fields are required !!" });
        } else if (body.email.slice(-10,) !== "@gmail.com") {
            return res.json({ message: "Enter valid email id !!" });
        } else if (body.password.length < 8 || !/\d/.test(body.password) || !/[a-z]/.test(body.password) || !/[A-Z]/.test(body.password) || !/[\W_]/.test(body.password)) {
            return res.json({ message: "Enter a valid password !!" });
        } else {
            next();
        }
    } else {
        next();
    }
};

module.exports = {
    authenticateUserSignin,
    authenticateUserLogin,
    authenticateUpdatedData
}