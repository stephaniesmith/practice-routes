const express = require('express');

const app = express();

app.get('/hello/:id', (req, res) => {
    res.json({
        routePath: req.url,
        method: req.method,
        params: req.params,
        query: req.query
    });
});

app.listen(3000);