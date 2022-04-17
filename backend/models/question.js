const { default: mongoose } = require('mongoose')
const {Schema, model} = require('mongoose')

const question = new Schema({
    question: String,
    theme: String,
    difficulty: String,
    answers: Array,
    correct: Number,
    desc: String
},
{
    collection:'Questions',
    versionKey: false
})

const Question = mongoose.model('Question', question)

module.exports = Question
