import { Link } from 'react-router-dom'

import { useCountAsBinary, useCountIncrementer } from '../store/count'

export default () => {
  const count = useCountAsBinary()
  const increment = useCountIncrementer()
  const handleClick = () => increment()

  return (
    <article>
      <p>
        <button type="button" onClick={handleClick}>
          count as binary is: {count}
        </button>
      </p>
 
      <p>
        Edit <code>selector-example.tsx</code> and save to test HMR updates.
      </p>

      <p>
        <Link
          className="App-link"
          to="/"
        >
          Home
        </Link>
      </p>
    </article>
  )
}
