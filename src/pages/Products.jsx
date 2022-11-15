import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductsDetail } from '../components/ProductsDetail'
import { ProductList } from '../components/ProductList'



export const Products = () => {
const [products, setproducts] = useState([])

useEffect(() => {
  axios.get("https://dummyjson.com/products")
  .then(res => setproducts( res.data.products))
    
}, [])

 
return (
    <>
           <Routes>
            <Route index element={<ProductList products={products} />} />
            <Route path=':productsid' element={<ProductsDetail/>}/>
              
          </Routes>
        
    </>
    // el primer route es obligator el segundo optativo
  )
}
// los dos punto : en path es que no se tenga que poner el nombre especifico