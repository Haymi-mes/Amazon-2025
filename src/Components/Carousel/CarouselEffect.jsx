import React from 'react'
import Carousel from 'react-responsive-carousel'
import img from './data'

function CarouselEffect() {
  
   return (
    <div>
       <Carousel
       autoPlay={true}
       infiniteLoop={true}
       showIndicators={false}
       showThumbs={false}
       >
        {
            img.map((imageItemLink)=>{
                return <img src={imageItemLink} />
            })
        }
        </Carousel> 
    </div>
  )
    
  
}

export default CarouselEffect