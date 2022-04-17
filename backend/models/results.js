const {default: mongoose} = require ('mongoose')
const {Schema, model} = require ('mongoose')

const result = new Schema({
    name: String,
    quizDate: Date,
    quizTime: Number,
    answers: Array
},
{
    collection: 'Results',
    versionKey: false
})

const Result = mongoose.model('Result', result)

module.exports = Result