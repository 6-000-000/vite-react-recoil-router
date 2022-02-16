import { Outlet } from 'react-router-dom'

import './layout.css'
import logo from './static/logo.svg'

export default () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Vite + React + Recoil + File-based Routing with React Router</p>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
