import React from 'react'
import { useEffect, useState } from 'react'
import { ProductList} from '../components/ProductList'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
    const[searchParams]=useSearchParams()
    let buscar = (searchParams.get('keyword')) 
    console.log(buscar)
    const [products, setproducts] = useState([])
    
   useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q=' + buscar)
        .then(res => {
                setproducts(res.data.products)
            })
    }, [searchParams])//condicional para que busque cuando cambie el parametro
    
  return (
    <div>
        Search Results
        {products.length == 0 && <p>No hay productos</p>}
          {products.length && <h4><ProductList products={products} /></h4>}
          
    </div>
  )
}
