const Datatabase = require('../models/createTableImage');
const valuesTable = require('../models/insertValues');

module.exports = {
	index(req, res) {
		return res.json({ teste: 'rotas' });
	},

	async listPosts(req, res) {
		try {
			const db = await Datatabase;
			const listImages = await db.all('SELECT * FROM images');

			return res.json(listImages);
		} catch {
			console.error('Erro ao lista a imagens do banco de dados!!')
		}
	},

	async post(req, res) {
		const file = req.file;

		try {
			const db = await Datatabase;
			await valuesTable(db, {
				name: file.originalname,
				size: file.size,
				key: file.filename,
				url: file.path,
			});

			return res.send('Dados da imagems foram guardados!!');
		} catch {
			console.error('Erro ao salvar os dados da imagens!!');
		}
	}
}