const routes = require('express').Router();
const multer = require('multer');
const Controlle = require('./controllers/imageControllers');
const multerConfig = require('./controllers/config/multer');

routes.get('/', Controlle.index);
routes.get('/post', Controlle.listPosts);

routes.post('/post', multer(multerConfig).single('file'), Controlle.post);

routes.delete('/post/:id', Controlle.deleteImage);

module.exports = routes;