const { Note } = require("../models/Note");

module.exports.createNote = async(body) => {
    let obj = {body: 'Remember to read your notes'}
    const note = new Note(obj);
    const savedNote = await note.save();
    return savedNote
}

module.exports.getNote = async() => {
    const notes = await Note.find();
    return notes;
}



module.exports.update = async(id,body) => {
    await Note.findOneAndUpdate({_id: id}, {body: body})
}

module.exports.getById = async (id) => {
    let note = await User.findOne({_id: id})
    if(note != null) {
        return note
    } else {
        return false
    }
}

module.exports.remove = async (id) => {
    const deletedNote = await Note.deleteOne({_id: id}, function(err, obj) {
       
    })
    if(deletedNote){
        return deletedNote
    } else 
         if (err) throw err;
}