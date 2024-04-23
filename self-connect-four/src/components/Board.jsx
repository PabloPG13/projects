import { useState } from 'react'
import { COLORS } from '../constants'
import { Square } from './Square'
import { Turns } from './Turns'
import { WinnerModal } from './WinnerModal'
import { setSquareColor, checkWinner } from '../utils'

export function Board() {
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

	const resetGame = () => {
		setBoard(Array(6).fill(Array(7).fill(null)))
		setColor(COLORS.RED)
		setWinner(null)
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
