import { Square } from './Square'
import { COLORS } from '../constants'

export function Turns({ color }) {
	return (
		<section className='turn'>
			<Square
				color={COLORS.RED}
				turnClass={color === COLORS.RED}
			/>
			<Square
				color={COLORS.YELLOW}
				turnClass={color === COLORS.YELLOW}
			/>
		</section>
	)
}
