import { useState } from 'react'
import './App.css'

const COLORS = {
  RED: 'RED',
  YELLOW: 'YELLOW',
}

function Square({rowIndex, columnIndex, updateBoard, color}){

  let className = ''
  if(color){
    className = color === COLORS.RED ? 'is-red' : 'is-yellow'
  }


  const handleClick = () => {
    updateBoard(columnIndex)
  }

  return(
    <div className={`square ${className}`} onClick={handleClick}/>
  )
}

function Board(){
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)))
  const [color, setColor] = useState(COLORS.RED)

  const updateBoard = (columnIndex) => {
    console.log(columnIndex)
    const newBoard = [...board]
    setSquareColor(newBoard, columnIndex, color)
    setColor(color === COLORS.RED ? COLORS.YELLOW : COLORS.RED)
    setBoard(newBoard)
  }

  const setSquareColor = (newBoard, columnIndex, color) => {
    for(let col = 5; col >= 0; col--){
      const newColumn = [...newBoard[col]]
      if(newColumn[columnIndex] === null){
        newColumn[columnIndex] = color
        newBoard[col] = newColumn
        break
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(6).fill(Array(7).fill(null)))
    setColor(COLORS.RED)
  }

  return (
    <>
      <div className="board">
        <h1>Connect four!</h1>
        <button onClick={resetGame}>Reset</button>

        <div className="game">
          {
            board.map((_,rowIndex) => {
              return (
                board[rowIndex].map((_, columnIndex) => {
                  return <Square 
                            rowIndex={rowIndex} 
                            columnIndex={columnIndex} 
                            key={`${rowIndex}${columnIndex}`} 
                            updateBoard={updateBoard} 
                            color={board[rowIndex][columnIndex]}/>
                })
              )
            })
          }
        </div>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <Board/>
    </>
  )
}

export default App
