import mongoose, { Schema } from 'mongoose'

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {type: String},
    birthdate: {type: Date},
    gender: {type: String},
    address: {type: String},
    postal_code: {type: String},
    areas_visited: {type: String},
    travel_date: {type: String}
}, {timestamps: true})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact