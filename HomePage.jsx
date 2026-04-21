import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import FoodCard from '../components/FoodCard'
import SearchBar from '../components/SearchBar'
import useFoodSearch from '../hooks/useFoodSearch'

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <Container sx={{ py: 4 }}>
      <SearchBar onSearch={searchFood} />

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      <Grid container spacing={2}>
        {results.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <FoodCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage