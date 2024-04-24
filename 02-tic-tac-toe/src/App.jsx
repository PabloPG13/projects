import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { checkEndGame, checkWinner } from './board'
import { Board } from './components/Board'

function App() {
	return (
		<main className='board'>
			<h1>Tic tac toe</h1>
			<Board />
		</main>
	)
}

export default App
