// Dependencies
const express   = require('express');
const path      = require('path');
const router    = new express.Router();

// Redirect to root if no filename is passed
router.get('/', (req, res) => {
    res.redirect('/');
});

// Return the file for the given filename, with cache-headers
router.get('/:filename', (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=432000');
    next();
}, express.static('./server/resources'));

// Return an error message if the file was not found
router.get('/:filename', (req, res) => {
    res.status(404).json({
        error: 'File not found',
    });
});

module.exports = router;
