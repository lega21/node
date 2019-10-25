const express = require('express');
const router = express.Router();

const mysqlConnection = require('../src/data/database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM REGION', (err, rows, fields) => {
        err ? console.log(err) : res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM REGION WHERE ID = ?', [id], (err, rows, fields) => {
        err ? console.log(err) : res.json(rows);
    });
});

router.post('/', (req, res) => {
    const { region } = req.body;
    mysqlConnection.query('INSERT INTO REGION (REGION) VALUES (?)',
        [region], (err, rows, fields) => {
            err ? console.log(err) : res.json({ status: 'Region Saved' });
        })
});

router.put('/:id', (req, res) => {
    const { region } = req.body;
    const {id } = req.params;
    mysqlConnection.query('UPDATE REGION SET REGION = ? WHERE IDREGION = ?',
        [region, id], (err, rows, fields) => {
            err ? console.log(err) : res.json({ status: 'Region Updated' });
        })
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log({id});
    mysqlConnection.query('DELETE FROM REGION WHERE IDREGION = ?', id, (err, rows, fields) => {
        err ? console.log(err) : res.json({ status: 'Region deleted' });
    })
});

module.exports = router;