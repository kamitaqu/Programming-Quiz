const { default: mongoose } = require('mongoose')
const {Schema, model} = require('mongoose')

const schema = new Schema({
    Question_text: String,
    Difficulty: String,
    Theme: String,
    Answers: Array
},
{
    collection:'Questions',
    versionKey: false
})

const Question = mongoose.model('Question', schema)

module.exports = Question
