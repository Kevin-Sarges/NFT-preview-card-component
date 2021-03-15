
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        { name: 'Imagem01', url: 'http://localhost:8080/Imagem01' }
      ]);
    });
};
