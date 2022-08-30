import { Dinosaur } from './models/dinosaur'

interface Props {
	dino: Dinosaur;
}

// Uppgift: det blir tjatigt att skriva "props.dino.." hela tiden. Kan man förkorta det?
const DisplayDino = (props: Props) => (
	<section>
		{props.dino.name} has a terror level of {props.dino.terrorLevel}!
	</section>
)

export default DisplayDino
