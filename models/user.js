let mongoose = require ('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
        },
        displayname:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Display name is required'
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"    
    }
);

let options = ({missingPasswordError: 'Wrong / Missing password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);