const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder:{
        title : {
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            description:'Note Body',
            demandOption : true,
            type: 'string'
        }
    },
    handler : function(argv){
        notes.addNotes(argv.title,argv.body)
    }

})
yargs.parse()