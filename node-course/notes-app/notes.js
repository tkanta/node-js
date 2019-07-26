const fs = require("fs")

const getNotes = function(){
    return "your notes ..."
}

const addNote = function(title, body){
    const notes = loadNotes()
    console.log(notes)
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}
module.exports = {
        getNotes: getNotes,
        addNote: addNote
}    