const authenticateAdminLogin=(req,res,next)=>{
    const body = req.body;
    if (!body.username || !body.password) {
        return res.json({ message: "All Fields are required !!" });
    } else if (body.password.length < 8 || !/\d/.test(body.password) || !/[a-z]/.test(body.password) || !/[A-Z]/.test(body.password) || !/[\W_]/.test(body.password)) {
            return res.json({ message: "Enter valid credentials !!" });
    } else {
        next();
    };
};

module.exports={
    authenticateAdminLogin
}