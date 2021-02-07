const Database = require('sqlite-async');

function saveImage(createTableImage){
	return createTableImage.exec(`
		CREATE TABLE IF NOT EXISTS images (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			url TEXT
		);
	`);
}

module.exports = Database.open(__dirname + './database.sqlite').then(saveImage);