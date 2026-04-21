import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FoodCard from '../components/FoodCard'

function SavedPage() {
  const items = useSelector(s => s.saved.items)

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">Saved Items</Typography>

      <Grid container spacing={2}>
        {items.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <FoodCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default SavedPage