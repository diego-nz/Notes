module.exports = (app) => {
    const notesController = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notesController.create);

    // Retrieve all Notes
    app.get('/notes', notesController.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notesController.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notesController.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notesController.delete);
}