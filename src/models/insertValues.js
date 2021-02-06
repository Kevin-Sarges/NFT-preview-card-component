function valuesTable(createTableImage, image){
	return createTableImage.run(`
		INSERT INTO images (
			id,
			name,
			url
		) VALUES (
			"${image.id}",
			"${image.name}",
			"${image.url}"
		);
	`);
}

module.exports = valuesTable;