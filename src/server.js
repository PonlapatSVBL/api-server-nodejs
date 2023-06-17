const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { connection } = require('./config/connector');

// app.use(cors());
app.use(bodyParser.raw({ type: 'application/json' }));

app.get('/rabbit-dev/api', (req, res) => {
    try {
        let body = JSON.parse(req.body);
        const apiPath = path.join(__dirname, 'modules', body.compgrp, body.comp, `${body.action}.js`);

        const api = require(apiPath);
        api(req, res);
    } catch (error) {
        res.status(404).json({ error: 'API not found' });
    }
});

app.post('/rabbit-dev/api', (req, res) => {
    try {
        let body = JSON.parse(req.body);
        const apiPath = path.join(__dirname, 'modules', body.compgrp, body.comp, `${body.action}.js`);

        const api = require(apiPath);
        api(req, res);
    } catch (error) {
        res.status(404).json({ error: 'API not found' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});