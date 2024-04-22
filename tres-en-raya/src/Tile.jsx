import React, { useState } from 'react'

export function Tile({letter}) {
	const [clicked, setClicked] = useState(false)
	const innerText = clicked ? letter : ''

	const handleClick = () => {
		setClicked(!clicked)
	}

	return <div className='tile' onClick={handleClick}>{innerText}</div>
}
