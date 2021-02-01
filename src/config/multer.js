const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
	dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
		},

		filename: (req, file, cb) => {
			crypto.randomBytes(10, (err, hash) => {
				if(err) cb(err);

				const fileName = `${hash.toString('hex')}-${file.originalname}`;

				cb(null, fileName);
			});
		},
	}),

	fileFilter: (req, file, cb) => {
		const typesImage = [
			'image/jpge',
			'image/png',
			'image/jpg',
		];

		if(typesImage.includes(file.mimetype)){
			cb(null, true)
		} else {
			cb(new Error('Tipo de arquivo invalido'));
		}
	}
};