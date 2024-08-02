const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, post: {
        type: String,
        required: true
    }, region: {
        type: String,
        required: true
    }, work: {
        type: String,
        required: true,
    }
});

schema.index({region:1,work:1},{unique:true});

const Politician = mongoose.model("workdetails", schema);

module.exports = { 
    Politician
 }