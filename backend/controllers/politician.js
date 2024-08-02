const { Politician } = require("../models/politician");
const { User } = require("../models/user");

const getPoliticianInfoAdmin = async (req, res) => {
    const response = await Politician.find({});
    return res.json(response);
};

const handleRemoveWork = async (req, res) => {
    const body = req.body;
    await Politician.deleteOne({ work: body.work });
    return res.json({ message: "Success" });
};

const handleAddWork = async (req, res) => {
    const body = req.body;
    try {
        await Politician.create(body);
        return res.json({ message: "Success" });
    } catch (error) {
        return res.json({ message: "Failed" });
    }
};

const getUserInfoAdmin = async (req, res) => {
    const response = await User.find({});
    return res.json(response);
};

const handleRemoveUser = async (req, res) => {
    const body = req.body;
    await User.deleteOne({ email: body.email });
    return res.json({ message: "Success" });
};

let searchdetails;
const handleAdminSearch = async (req, res) => {
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
    getPoliticianInfoAdmin,
    handleRemoveWork,
    handleAddWork,
    getUserInfoAdmin,
    handleRemoveUser,
    handleAdminSearch
}