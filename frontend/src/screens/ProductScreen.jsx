import { useParams } from 'react-router-dom'
import products from '../products'

function ProductScreen() {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
  console.log(product)

  return (
    <div>ProductScreen</div>
  )
}

export default ProductScreen