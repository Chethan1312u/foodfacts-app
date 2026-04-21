import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  const handle = (e) => {
    e.preventDefault()
    if (!q.trim()) return
    onSearch(q)
  }

  return (
    <Box component="form" onSubmit={handle} sx={{ display: 'flex', gap: 1 }}>
      <TextField fullWidth value={q} onChange={e => setQ(e.target.value)} />
      <Button type="submit" variant="contained">Search</Button>
    </Box>
  )
}

export default SearchBar