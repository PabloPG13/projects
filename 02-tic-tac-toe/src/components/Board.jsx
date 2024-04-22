import { Square } from "./Square"
import { useState } from "react"
import { TURNS } from "../constants"
import { Turn } from "./Turn"
import { WinnerModal } from "./WinnerModal"
import { checkWinner, checkEndGame } from "../board"

export function Board(){
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)

    const updateBoard = (index) => {
        console.log(index)
        if(board[index] || winner) return
    
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
    
        const newWinner = checkWinner(newBoard)
        if(newWinner){
          setWinner(newWinner)
        }else if(checkEndGame(newBoard)){
          setWinner(false)
        }
    
        if(newWinner === null){
          const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
          setTurn(newTurn)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }

    return(
        <>
            <button onClick={resetGame}>Reset</button>
            <section className="game">
                {
                board.map((_, index) => {
                    return(
                    <Square key={index} index={index} updateBoard={updateBoard}>
                        {board[index]}
                    </Square>
                    )
                })
                }
            </section>
            <Turn turn={turn}/>
            <WinnerModal winner={winner} resetGame={resetGame}/>  
        </>
    )
}