const express = require('express')

const app = express()

const bricks = [
	{ id: 1, text: 'text' },
	{ id: 2, text: 'text' },
	{ id: 3, text: 'text' },
	{ id: 4, text: 'text' },
	{ id: 5, text: 'text' },
	{ id: 6, text: 'text' },
]

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
