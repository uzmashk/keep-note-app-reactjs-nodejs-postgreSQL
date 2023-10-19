const controller = require('../controllers/notecontroller');

const setRoutes = (app) => {
    app.get('/', (req, res) => {
      res.send('This is a note application.');   
    });

app.get('/note', controller.getAllNotes);
app.get('/note/:id', controller.getNoteById);

app.post('/note', controller.createNote);

app.delete("/note/:id", controller.deleteNote);

}

module.exports = setRoutes;