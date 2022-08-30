import { useState } from 'react'
import './App.css'
import DisplayDino from './DisplayDino'
import { Dinosaur } from './models/dinosaur'


function App() {
	// useState är generisk, ange datatypen med <>
	const [count, setCount] = useState<number>(0)
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
	const [dino, setDino] = useState<Dinosaur>({
		name: 'Triceratops', terrorLevel: 4
	})

	// bra att tala om för TypeScript att darkCss är en sträng
	const darkCss: string = isDarkMode ? ' dark' : ''

	// inte lika meningsfullt att ange datatypen här
	const handleClick: () => void = () => setCount((count) => count + 1)
	const handleDarkModeClick = () => setIsDarkMode(mode => !mode)
	
	return (
		<div className={"App" + darkCss}>
		
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={handleClick}>
					count is {count}
				</button>

				<button onClick={handleDarkModeClick}> Toggla dark mode </button>
			
			</div>

			<DisplayDino dino={dino} />
		
		</div>
		)
	}
	
	export default App
	