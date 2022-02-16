import {
  atom,
  useRecoilValue,
  useSetRecoilState,
  selector,
} from 'recoil'

const KEY = 'count'
const DEFAULT: Store = 0

type Store = number

// Export atoms and selectors in case one-off mutations or selectors need to made from them

export const state = atom({
  key: KEY,
  default: DEFAULT,
})

export const countAsBinarySelector = selector({
  key: 'countAsBinary',
  get: ({ get }) => get(state).toString(2),
})

// Declare and export all reusable/shared store hooks and actions below

export function useCountStore() {
  return useRecoilValue(state)
}

export function useCountIncrementer() {
  const setter = useSetRecoilState(state)
  return () => setter(count => count + 1)
}

export function useCountAsBinary() {
  return useRecoilValue(countAsBinarySelector)
}
