const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/createTableImage');

routes.get('/', (req, res) => {
	return res.json({ testando: 'multer'});
});

routes.post('/post', multer(multerConfig).single('file'), async (req, res) => {
	console.log(req.file)
	return res.json("Tudo certo");
});

module.exports = routes;