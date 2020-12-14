const fs= require('fs')
const addNotes = function(title,body){
    const notes = getNotes()
    const duplicateNotes = notes.filter(function(note){
        return title==note.title
    })
    if(duplicateNotes.length===0){
        notes.push({
            title : title,
            body : body
        })
        fs.writeFileSync('notes.json',JSON.stringify(notes))
        console.log("Note was Added")
    }
    else{
        console.log('Title already taken')
    }
   
}
const getNotes = function(){
    try{
        const notesBuffer = fs.readFileSync('notes.json')
        const notesString = notesBuffer.toString()
        return JSON.parse(notesString) 
    }
    catch(error){
        return []
    }
    
}
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes
}    