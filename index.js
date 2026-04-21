import { configureStore } from '@reduxjs/toolkit'
import savedReducer from './savedSlice'

const STORAGE_KEY = 'foodfacts-saved'

const store = configureStore({
  reducer: {
    saved: savedReducer
  }
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.saved.items))
  } catch {}
})

export default store