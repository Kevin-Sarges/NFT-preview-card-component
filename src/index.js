const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.use('/post', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port || process.env.PORT, () => {
    console.log(`http://localhost:${port}`);
});