const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

app.listen(port || process.env.PORT, () => {
    console.log(`http://localhost:${port}`);
});