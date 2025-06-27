const express = require('express')
const router = express.Router()

// Home page route
router.get('/', (req, res) => {
    res.send('Welcome to Apple Store')
})

// About page route
router.get('/about', (req, res) => {
    res.send('About Apple')
})

// Query page route
router.get('/query', (req, res) => {
    res.send('Send Query')
})

// Dynamic route for any slug not matched above
router.get('/:slug', (req, res) => {
    res.send(`apple.com doesnt found content for ${req.params.slug}`)
})

module.exports = router
