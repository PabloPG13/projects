import { COLORS } from '../constants'

export function Square({ columnIndex, updateBoard, color, turnClass }) {
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
