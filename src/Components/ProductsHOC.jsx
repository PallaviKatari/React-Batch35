import React from 'react'
import Hoc from './Hoc'

//ProductList Component
const ProductsList = ({ data }) => {
  let ProductsList = data.map((item) => {
    return <div key={item.id}>{item.title}</div>
  })
  return <div>{ProductsList}</div>
}
const SearchProducts = Hoc(ProductsList, 'photos')
export default SearchProducts