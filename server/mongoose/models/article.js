const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    author_id: String,
    category_id: String,
    startDate: { type: Date, default: Date.now },
    publicationDate: Date,
    ratingSum: Number,
    ratersNumber: Number,
    header: {
        title: { type: String, required: true },
        subtitle: String,
        imageUrl: String
    },
    sections: [
        {
            priority: Number,
            title: { type: String, required: true },
            body: [
                {
                    subtitle: String,
                    paragraph: String,
                    codeSnippet: String,
                    image: String,
                    list: [
                        {
                            priority: Number,
                            content: String
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Article', articleSchema);
