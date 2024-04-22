import './App.css'
import { Tile } from './Tile'

function App({letter}) {
	let tiles = []

	for(let x = 0; x < 9; x++){
		tiles.push(<Tile key={x} letter={letter}/>)
	}

	return tiles;
}

export default App
