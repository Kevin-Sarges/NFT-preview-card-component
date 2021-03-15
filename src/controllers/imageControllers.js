const knex = require('../database');

module.exports = {
	index(req, res, next) {
		return res.render('index');
	},

	async listPosts(req, res, next) {
		try {
			const listImages = await knex('images');

			return res.json(listImages);
		} catch (error) {
			next(error);
		}
	},

	async post(req, res, next) {
		try {
			const file = req.file;

			await knex('images').insert({
				name: file.originalname,
				url: `http://localhost:8080/post/${file.filename}`,
			});

			return res.redirect('/');
			//return res.status(201).send();
		} catch (error) {
			next(error);
		}
	},

	async deleteImage(req, res, next) {
		try {
			const { id } = req.params;
			await knex('images').where({ id }).del();

			return res.status(201).send();	
		} catch (error) {
			next(error);
		}
	}
}