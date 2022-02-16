# vite-react-recoil-router
A react app template made with Vite featuring state management with [Recoil](https://recoiljs.org/) and file-based routing with [React Router](https://reactrouter.com/).

## Scripts
Development
```bash
npm run dev
```

Build
```bash
npm run build
```

## Notes
This uses the [glob import API](https://vitejs.dev/guide/features.html#glob-import) of with Vite (see `App.tsx`) to get file names and formats them as such:
- Strip `/src/pages`, `index`, and `.tsx` from each path
- Replace `[...param]` patterns with `*`
- Replace `[param]` patterns with `:param`

There is only one top-level layout component. Nested layouts via routes are not yet supported.
