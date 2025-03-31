const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/:page', (req, res, next) => {
    const filePath = path.join(__dirname, 'public', `${req.params.page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) next(); 
    });
});

app.use((req, res) => {
    res.status(404).send('Page Not Found');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
