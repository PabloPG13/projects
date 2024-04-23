import { Square } from "./Square"

export function WinnerModal({winner, resetGame}){
    if(winner === null) return
    const winnerText = winner === false ? 'Draw' : 'Winner'
  
    return(
  
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
  
          <header className="win">
            {winner !== false && <Square>{winner}</Square>}
          </header>
  
          <footer>
            <button onClick={resetGame}>Reset game</button>
          </footer>
        </div>
      </section>
    )
}