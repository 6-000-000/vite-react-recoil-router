import { useParams } from 'react-router-dom'
export default () => {
  const params = useParams()
  return (
    <article>
      <p>
        Spread params: {JSON.stringify(params['*']!.split('/'))}
      </p>

      <p>
        Edit <code>[...params].tsx</code> and save to test HMR updates.
      </p>
    </article>
  )
}
