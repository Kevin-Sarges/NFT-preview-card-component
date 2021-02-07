function valuesTable(createTableImage, image){
	return createTableImage.run(`
		INSERT INTO images (
			name,
			url
		) VALUES (
			"${image.name}",
			"${image.url}"
		);
	`);
}

module.exports = valuesTable;