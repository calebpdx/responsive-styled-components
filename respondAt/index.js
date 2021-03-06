import { css } from 'styled-components'
import { breakpoints } from './variables'

export const respondAt = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
			@media (min-width: ${breakpoints[label]}) {
				${css(...args)};
			}
		`
		return accumulator
	},
	{}
)
