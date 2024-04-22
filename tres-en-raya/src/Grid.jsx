import React from 'react'
import App from './App.jsx'
import { useState } from 'react'

function Grid () {
    const [letter, setLetter] = useState('X')

    const changeLetter = () => {
        setLetter(letter == 'X' ? 'O' : 'X')
        console.log(`change to ${letter}`)
    }
    
    return (
        <div className="grid" onClick={changeLetter}>
            <App/>
        </div>
    )
}

export default Grid