const routes = require('express').Router();
const multer = require('multer');
const pages = require('./controllers/pages');
const multerConfig = require('./controllers/config/multer');

routes.get('/', pages.index);
routes.get('/post', pages.listPosts);

routes.post('/post', multer(multerConfig).single('file'), pages.post);

module.exports = routes;