import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';


export const ProductsDetail = () => {

  const {productsid} = useParams();
  const [products, setproducts] = useState(null)
  console.log(productsid)
  useEffect(() => {
    axios.get("https://dummyjson.com/products/" + productsid)
      .then(res => {
        setproducts(res.data)
      })
  }, [productsid])





  return (
    <>
      <h2 className=' text-center'>Products</h2>
      <div className=' card'>
      {products && (
        <>
         
          
          <div className=' card-body'>
              <div className=' card-title text-bg-dark text-center'><h3>{products.title}</h3></div>
            <div className=' row'>
              <div className=' col-5'><img src={products.thumbnail} width={400} height={300}></img></div>
              <div className=' col-5'>
                <ul><h3>Category:</h3>{products.category}</ul>
                <ul><h3>Description:</h3>{products.description}</ul>
                <ul><h3>Precio:</h3>{products.price}</ul>
              </div>
              </div>
          </div>
         
         
        </>
      )}
        <Link className='btn btn-dark' to='/products'>Back to Products Page</Link>

      </div>
       </>
  )
}
