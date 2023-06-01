import React from 'react'
import Form from './components/Form'
import List from './components/List'
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>The App</h1>
				<Form />
				<List />
			</div>
		)
	}
}

export default App
