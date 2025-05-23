require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { mongoconnect } = require("./connection");

const userroutes = require("./routes/user");
const { authenticateUserSignin, authenticateUserLogin, authenticateUpdatedData } = require("./middlewares/user");

const adminroutes = require("./routes/admin");
const { authenticateAdminLogin } = require("./middlewares/admin");

const politicianroutes = require("./routes/politician");

const PORT = process.env.PORT || 8001;

mongoconnect(process.env.MONGO_URL).catch((err) => {
    console.log("Error in database connection :", err);
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user/signin", authenticateUserSignin);
app.use("/user/login", authenticateUserLogin);
app.use("/user/update", authenticateUpdatedData);

app.use("/admin/login", authenticateAdminLogin);

app.use("/user", userroutes);
app.use("/admin", adminroutes);
app.use("/work", politicianroutes);

app.listen(PORT, () => console.log("Server started on 8001"));