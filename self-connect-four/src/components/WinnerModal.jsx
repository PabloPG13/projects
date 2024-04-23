export function WinnerModal({ winner, resetGame }) {
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
