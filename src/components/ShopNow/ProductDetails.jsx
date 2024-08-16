import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {prdId} = useParams();
  return (
    <div>
        Hello, id is: & {prdId}
    </div>
  )
}

export default ProductDetails
