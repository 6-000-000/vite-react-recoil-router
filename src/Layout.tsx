import { Outlet, Link } from 'react-router-dom'

import './layout.css'
import logo from './static/logo.svg'

export default () => {
  const links = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Derived State (Selector) Example',
      to: 'selector-example',
    },
    {
      name: 'URL param Example',
      to: 'user',
    },
  ]
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Vite + React + Recoil + File-based Routing with React Router</p>
      </header>

      <main>
        <Outlet />

        <nav>
          {links.map(({ to, name }) => (
            <Link className="App-link" to={to}>{name}</Link>
          ))}
        </nav>
      </main>
    </>
  )
}
