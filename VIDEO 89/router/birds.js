const express = require('express')
const router = express.Router()

// Home page route for birds
router.get('/', (req, res) => {
    res.send('Birds home page')
})

// About page route for birds
router.get('/about', (req, res) => {
    res.send('About birds')
})

// Query route for birds
router.get('/query', (req, res) => {
    res.send('Send Query')
})

// Dynamic route for birds with slug parameter
router.get('/:slug', (req, res) => {
    res.send(`Fetched the birds page for ${req.params.slug}`)
})

module.exports = router
