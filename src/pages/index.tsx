import { Link } from 'react-router-dom'

import { useCountStore, useCountIncrementer } from '../store/count'

export default () => {
  const count = useCountStore()
  const increment = useCountIncrementer()
  const handleClick = () => increment()

  return (
    <article>
      <p>
        <button type="button" onClick={handleClick}>
          count is: {count}
        </button>
      </p>
 
      <p>
        Edit <code>index.tsx</code> and save to test HMR updates.
      </p>

      <p>
        <Link
          className="App-link"
          to="/selector-example"
        >
          Derived State (Selector) Example
        </Link>
      </p>
    </article>
  )
}
