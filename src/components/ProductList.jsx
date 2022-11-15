import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductsDetail } from '../components/ProductsDetail'

export const ProductList = ({ products }) => {
  return (
    <div className=' col-12 mb-2 text-bg-dark'>
      <h1 className='text-center'>For more information Select Product</h1>
      {products.map(products => {
        return (
          <>
          
            <Link Link to={"/products/" + products.id}>
            <img className=' border-start border-bottom border-light p-1 mb-1 m-1' src={products.thumbnail} style={{ width: 150 , height:100 }}>
            </img>
            </Link>


          </>

        )
      })}
    </div>
  )
}
