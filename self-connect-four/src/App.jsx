import { useState } from 'react'
import './App.css'

const COLORS = {
	RED: 'RED',
	YELLOW: 'YELLOW',
}

function Square({ columnIndex, updateBoard, color, turnClass }) {
	let className = ''

	if (color) {
		className = color === COLORS.RED ? `is-red` : `is-yellow`
	}

	console.log(turnClass)
	const innerText = turnClass ? 'A' : ''

	const handleClick = () => {
		updateBoard(columnIndex)
	}

	return (
		<div
			className={`square ${className}`}
			onClick={handleClick}
		>
			{innerText}
		</div>
	)
}

function Turns({ color }) {
	return (
		<section className='turn'>
			<Square
				color={COLORS.RED}
				turnClass={color === COLORS.RED}
			/>
			<Square
				color={COLORS.YELLOW}
				turnClass={color === COLORS.YELLOW}
			/>
		</section>
	)
}

function WinnerModal({ winner, resetGame }) {
	if (winner === null) return
	return (
		<section className='winner'>
			<div className='text'>
				<h2>{`${winner} WINS`}</h2>
				<footer>
					<button onClick={resetGame}>Reset game</button>
				</footer>
			</div>
		</section>
	)
}

function Board() {
	const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)))
	const [color, setColor] = useState(COLORS.RED)
	const [winner, setWinner] = useState(null)

	const updateBoard = (columnIndex) => {
		const newBoard = [...board]
		setSquareColor(newBoard, columnIndex, color)
		setBoard(newBoard)
		setWinner(checkWinner(newBoard))
		setColor(color === COLORS.RED ? COLORS.YELLOW : COLORS.RED)
	}

	const setSquareColor = (newBoard, columnIndex, color) => {
		for (let col = 5; col >= 0; col--) {
			const newColumn = [...newBoard[col]]
			if (newColumn[columnIndex] === null) {
				newColumn[columnIndex] = color
				newBoard[col] = newColumn
				break
			}
		}
	}

	const resetGame = () => {
		setBoard(Array(6).fill(Array(7).fill(null)))
		setColor(COLORS.RED)
		setWinner(null)
	}

	const checkLine = (a, b, c, d) => {
		// Check first cell non-zero and all cells match
		return a != null && a == b && a == c && a == d
	}

	function checkWinner(newBoard) {
		// Check down
		for (let r = 0; r < 3; r++)
			for (let c = 0; c < 7; c++)
				if (
					checkLine(
						newBoard[r][c],
						newBoard[r + 1][c],
						newBoard[r + 2][c],
						newBoard[r + 3][c]
					)
				)
					return newBoard[r][c]

		// Check right
		for (let r = 0; r < 6; r++)
			for (let c = 0; c < 4; c++)
				if (
					checkLine(
						newBoard[r][c],
						newBoard[r][c + 1],
						newBoard[r][c + 2],
						newBoard[r][c + 3]
					)
				)
					return newBoard[r][c]

		// Check down-right
		for (let r = 0; r < 3; r++)
			for (let c = 0; c < 4; c++)
				if (
					checkLine(
						newBoard[r][c],
						newBoard[r + 1][c + 1],
						newBoard[r + 2][c + 2],
						newBoard[r + 3][c + 3]
					)
				)
					return newBoard[r][c]

		// Check down-left
		for (let r = 3; r < 6; r++)
			for (let c = 0; c < 4; c++)
				if (
					checkLine(
						newBoard[r][c],
						newBoard[r - 1][c + 1],
						newBoard[r - 2][c + 2],
						newBoard[r - 3][c + 3]
					)
				)
					return newBoard[r][c]

		return null
	}

	return (
		<>
			<div className='board'>
				<h1>Connect four!</h1>
				<button onClick={resetGame}>Reset</button>

				<div className='game'>
					{board.map((_, rowIndex) => {
						return board[rowIndex].map((_, columnIndex) => {
							return (
								<Square
									rowIndex={rowIndex}
									columnIndex={columnIndex}
									key={`${rowIndex}${columnIndex}`}
									updateBoard={updateBoard}
									color={board[rowIndex][columnIndex]}
								/>
							)
						})
					})}
				</div>

				<Turns color={color} />
				<WinnerModal
					winner={winner}
					resetGame={resetGame}
				/>
			</div>
		</>
	)
}

function App() {
	return (
		<>
			<Board />
		</>
	)
}

export default App
