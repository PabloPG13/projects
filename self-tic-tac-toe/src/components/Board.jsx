import { useState } from "react"
import { Turn } from "./Turn"
import { WinnerModal } from "./WinnerModal"
import { Square } from "./Square"
import { TURNS } from "../constants"
import { checkDraw, checkWinner } from "../utils"

export function Board(){

    const [board, setBoard] = useState(() => {
      const storageBoard = window.localStorage.getItem('board')
      return storageBoard ? JSON.parse(storageBoard) : Array(9).fill(null)
    })
  
    const [turn, setTurn] = useState(() => {
      const storageTurn = window.localStorage.getItem('turn')
      return storageTurn ? JSON.parse(storageTurn) : TURNS.X
    })
  
    const [winner, setWinner] = useState(null)
  
    const updateBoard = (index) => {
      //if the square is already taken, do nothing
      if(board[index]) return
  
      // update the board with the turn symbol
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      
      //check if theres a winner
      const newWinner = checkWinner(newBoard)
      if(newWinner !== null){
        setWinner(newWinner)
        return
      }else if(checkDraw(newBoard)){
        setWinner(false)
        return
      }
  
      // update the turn
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
  
      //save the state
      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', JSON.stringify(newTurn))
    }
  
    const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
      window.localStorage.clear()
    }
  
    return(
      <div className="board">
        <h1>Tic Tac Toe</h1>
  
        <button onClick={resetGame}>Reset game</button>
  
        <div className="game">
          {
            board.map((_, index) => {
              return <Square updateBoard={updateBoard} index={index} key={index}>
                {board[index]}
              </Square>
            })
          }
        </div>
        <Turn turn={turn}/>
        <WinnerModal winner={winner} resetGame={resetGame}/>
      </div>
    )
}