import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const {product_id} = useParams();
  return (
    <div>Product Detail {product_id}</div>
  )
}

export default ProductDetail