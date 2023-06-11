const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { connection } = require('./config/connector');


// ตั้งค่าให้ Express รับรูปแบบ JSON
// app.use(express.json());

app.use(bodyParser.raw({ type: 'application/json' }));

app.get('/', (req, res) => {
    let body = JSON.parse(req.body);
    // console.log(body);

    const apiPath = path.join(__dirname, 'modules', body.compgrp, body.comp, `${body.action}.js`);
    // console.log(apiPath);

    try {
        const api = require(apiPath);
        api(req, res);
    } catch (error) {
        res.status(404).json({ error: 'API not found' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});