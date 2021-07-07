# responsive-styled-components

A lightweight hook to use with styled-components to easily set responsive breakpoints

## Installation

Put folder into your hooks folder in your React project

## Usage

```javascript
// import styled-components at the hook from your folder
import styled from 'styled-components'
import { respondAt } from '../hooks/respondAt'

const Title = styled.h1`
  font-size: 5em;
  
  // inside of your styled component call the function plus the breakpoint key
  ${respondAt.sm`
    font-size: 10em;
   `}
`

export default function Home() {
  return (
    <div>
	<Title>Hello, World</Title>
    </div>
  )
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
