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
    </article>
  )
}
