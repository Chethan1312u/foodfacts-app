import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function DetailPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const saved = useSelector(s => s.saved.items)
  const product = state?.product

  if (!product) return <Typography>No product</Typography>

  const isSaved = saved.some(p => p.id === product.id)

  const toggle = () => {
    isSaved
      ? dispatch(removeItem(product.id))
      : dispatch(addItem(product))
  }

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Back</Button>

      <Typography variant="h4">{product.product_name}</Typography>

      <Button onClick={toggle}>
        {isSaved ? 'Remove' : 'Save'}
      </Button>
    </Container>
  )
}

export default DetailPage