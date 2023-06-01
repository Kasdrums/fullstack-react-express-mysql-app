const express = require('express')

const app = express()

const bricks = []

app.get('api/bricks', (req, res) => {
	console.log('Get all bricks')
	res.send('OK')
})

app.post('/api/bricks', (req, res) => {
	console.log('Add new brick')
	res.send('OK')
})

app.listen(8000, () => {
	console.log('Server is running')
})
