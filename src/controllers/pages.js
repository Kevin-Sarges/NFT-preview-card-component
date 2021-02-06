const Datatabase = require('../models/createTableImage');
const valuesTable = require('../models/insertValues');

module.exports = {
	index(req, res) {
		return res.json({ 'teste': 'Multer' });
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
				id: file.filename,
				name: file.originalname,
				url: `http://localhost:8080/files/${file.filename}`,
			});

			return res.send('Dados da imagems foram guardados!!');
		} catch {
			console.error('Erro ao salvar os dados da imagens!!');
		}
	},

	async deleteImage(req, res) {
		const file = req.file;

		try {
			const db = await Datatabase;
			await db.run(`DELETE FROM images WHERE id = ${file.id}`);

			return res.send('Image deletada do banco de dados');
		} catch {
			console.error('Erro ao deletar a imagem!!');
		}
	}
}