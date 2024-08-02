const { User } = require("../models/user");
const { Politician } = require("../models/politician");

let temp;

const handleUserSigninPost = async (req, res) => {
    const body = req.body;
    try {
        await User.create(body);
        temp = body;
        return res.json({ message: "Success" });
    } catch (err) {
        return res.json({ message: "User already exists" });
    }
};

const handleUserLoginPost = async (req, res) => {
    const body = req.body;
    const response = await User.findOne({ username: body.username, password: body.password });
    if (response === null) {
        return res.json({ message: "Enter valid credentials" });
    } else {
        temp = response;
        return res.json({ message: "Success" });
    }
};

const handleUserUpdateGet = async (req, res) => {
    return res.json(temp);
};

const handleUserUpdatePost = async (req, res) => {
    const body = req.body;
    await User.updateOne(temp, { $set: body });
    temp = body;
    return res.json({ message: "Success" });
};

const handlePoliticianInfoUser = async (req, res) => {
    try {
        const response = await Politician.find({ region: temp.region.toUpperCase() });
        return res.json(response);
    } catch (error) {
        return res.send("Cannot get without login or signin");
    }
};

let searchdetails;
const fetchSearchDetails = async (req, res) => {
    const body = req.body;
    if (body.word2 === undefined) {
        body.word1 = body.word1.toUpperCase();
        searchdetails = await Politician.find({ post: body.word1 });
        if (searchdetails.length === 0) {
            searchdetails = await Politician.find({ region: body.word1 });
        }
    } else {
        body.word1 = body.word1.toUpperCase();
        body.word2 = body.word2.toUpperCase();
        searchdetails = await Politician.find({ post: body.word1, region: body.word2 });
        if (searchdetails.length === 0) {
            searchdetails = await Politician.find({ post: body.word2, region: body.word1 });
        };
    };
    if (searchdetails.length !== 0) {
        return res.json(searchdetails);
    } else {
        return res.json({ message: "Failed" })
    };
};

module.exports = {
    handleUserSigninPost,
    handleUserLoginPost,
    handleUserUpdateGet,
    handleUserUpdatePost,
    handlePoliticianInfoUser,
    fetchSearchDetails
}