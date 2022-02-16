import { Link } from 'react-router-dom'

export default () => {
  return (
    <article>
      <ul>
        <li><Link to="/user/123a">123a</Link></li>
        <li><Link to="/user/456b">456b</Link></li>
        <li><Link to="/user/789c">789c</Link></li>
      </ul>

      <p>
        Edit <code>user/index.tsx</code> and save to test HMR updates.
      </p>
    </article>
  )
}
