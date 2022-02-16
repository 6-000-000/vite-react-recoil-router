import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'

// Enables file-based routing
// Use glob import API from Vite to import all modules from pages (https://vitejs.dev/guide/features.html#glob-import)
const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.tsx')
// Map to an array of Route props
const routes = Object.keys(ROUTES).map(route => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')
  return { path, component: ROUTES[route].default }
})

export default () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        {routes.map(({ path, component: Page }) => (
           <Route key={path} path={path} element={<Page />} />
        ))}
      </Route>
    </Routes>
  )
}
