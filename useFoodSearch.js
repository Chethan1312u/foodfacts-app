import { useState } from 'react'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`
      )
      const data = await res.json()

      const items = data.products.map(p => ({
        id: p.id || p._id,
        product_name: p.product_name,
        brands: p.brands,
        image_small_url: p.image_small_url,
        nutriments: p.nutriments
      }))

      setResults(items)
    } catch {
      setError('Error fetching')
    }
    setLoading(false)
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch