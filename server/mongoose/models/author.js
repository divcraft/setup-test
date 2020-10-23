const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    privateEmail: { type: String, required: true },
    divcraftEmail: String,
    login: { type: String, required: true },
    password: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
    photoUrl: String,
    paragraph1: String,
    paragraph2: String,
    paragraph3: String,
    listItem1: String,
    listItem2: String,
    listItem3: String,
    facebookUrl: String,
    twitterUrl: String,
    linkedinUrl: String,
    instagramUrl: String,
    markedArticles: [{ article_id: String }]
});

module.exports = mongoose.model('Author', authorSchema);
