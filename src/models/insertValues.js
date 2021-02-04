function valuesTable(createTableImage, image){
	return createTableImage.run(`
		INSERT INTO images (
			name,
			size,
			key,
			url
		) VALUES (
			"${image.name}",
			"${image.size}",
			"${image.key}",
			"${image.url}"
		);
	`);
}

module.exports = valuesTable;