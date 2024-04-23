import { Square } from "./Square"
import { useState } from "react"
import { TURNS } from "../constants"
import { Turn } from "./Turn"
import { WinnerModal } from "./WinnerModal"
import { checkWinner, checkEndGame } from "../board"

export function Board(){

    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })
    
    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X   
    })

    const [winner, setWinner] = useState(null)

    const updateBoard = (index) => {
        if(board[index] || winner) return
    
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        // guardar partida
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        
        const newWinner = checkWinner(newBoard)
        if(newWinner){
            setWinner(newWinner)
        }else if(checkEndGame(newBoard)){
            setWinner(false)
        }
        
        if(newWinner === null){
            const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
            setTurn(newTurn)
            window.localStorage.setItem('turn', JSON.stringify(newTurn))
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')
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
            <Turn turn={turn} />
            <WinnerModal winner={winner} resetGame={resetGame}/>  
        </>
    )
}