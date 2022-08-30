import { useState } from 'react'
import './App.css'

function App() {
	// useState är generisk, ange datatypen med <>
	const [count, setCount] = useState<number>(0)
	
	return (
		<div className="App">
		
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
			count is {count}
			</button>
			
			</div>
		
		</div>
		)
	}
	
	export default App
	