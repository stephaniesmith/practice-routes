const express = require('express');
const Router = express.Router;
const router = Router();

module.exports = router
    .get('/', (req, res) => {
        res.json([{ name: 'thing 1'}, { name: 'thing 2'}]);
    })

    .get('/:id', (req, res) => {
        res.json({ name: 'thing 1'});
    })

    .post('/', (req, res) => {
        res.json({ name: 'thing 3'});
    })

    .del('/:id', (req, res) => {
        res.json({ removed: true});
    });