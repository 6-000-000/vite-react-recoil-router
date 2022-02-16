import { useParams } from 'react-router-dom'
export default () => {
  const { id } = useParams()
  return (
    <article>
      <p>
        User ID is: {id}
      </p>

      <p>
        Edit <code>user/[id].tsx</code> and save to test HMR updates.
      </p>
    </article>
  )
}
