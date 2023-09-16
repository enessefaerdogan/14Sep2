// adımlar
// 1 - şema tanımla ( Note: id, userid, title, content )
// 2 - model yarat (<model nam> <schema> Note)


// mongoose buraya alınır
const mongoose = require('mongoose');


const noteSchema = mongoose.Schema({

    id: {
        type: String,
        unique: true,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
});

// adım 2 model belirleme
// "Note" adlı modele noteSchema verildi
// exporta eşitlendi
module.exports = mongoose.model("Note", noteSchema);