import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'foodfacts-saved'

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    items: loadFromStorage()
  },
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.some(item => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = savedSlice.actions
export default savedSlice.reducer