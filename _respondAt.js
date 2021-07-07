import { css } from 'styled-components'
const breakpoints = require(process.env.INIT_CWD('_variables.js'))

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
