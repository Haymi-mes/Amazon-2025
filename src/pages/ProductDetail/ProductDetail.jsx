import React, { useEffect ,useState} from 'react'
import LayOut from '../../Components/Layout/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function ProductDetail() {
  const {productId} =useParams()
  const [isLoading, setIsLoading]=useState(false)
  const [product, setProduct]= useState({})
  // console.log(productId);
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${ProductUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err);
      setIsLoading(false)
      
    })

  }, [])
  
  
  return (
    <LayOut>
      {isLoading?(<Loader />):(<ProductCard
      product={product}
      flex={true}
      renderDesc ={true}
      renderAdd={true}

      />
      )}
   
  </LayOut>
    
  )
}

export default ProductDetail