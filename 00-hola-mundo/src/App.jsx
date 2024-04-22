import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

const App = () => {
	return (
		<section className='App'>
			<TwitterFollowCard userName='illojuan'>IlloJuan</TwitterFollowCard>

			<TwitterFollowCard userName='midudev'>
				Miguel Ángel Durán
			</TwitterFollowCard>
		</section>
	)
}

export default App
