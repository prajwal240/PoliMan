const { Admin } = require("../models/admin");

const handleAdminLogin = async (req, res) => {
    const body = req.body;
    const response = await Admin.findOne(body);
    if (response !== null) {
        return res.json({ message: "Success" });
    } else {
        return res.json({ message: "Enter Valid Credentials !!" });
    }
};



module.exports = {
    handleAdminLogin,
};