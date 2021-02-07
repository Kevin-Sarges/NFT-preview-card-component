const createTableImage = require('./createTableImage');
const Database = require('./createTableImage');
const insertValues = require('./insertValues');

Database.then(async(image) => {
  /*await insertValues(image, {
		name: 'logo.png',
		url: 'http://localhost:8080/file/354fqwsfasfwq5a68w3qd-logo.png'
	});*/

	const selectImages = await image.all('SELECT * FROM images');
	console.log(selectImages);

	//await image.run('DELETE FROM images WHERE id = "b471ab5ea286729f9cbc-LOGO1.png"');
	//console.log('Images removida');
});