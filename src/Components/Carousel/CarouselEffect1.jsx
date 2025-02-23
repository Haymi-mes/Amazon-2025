import React from 'react'
import { img } from './data'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Carousel.module.css'

function CarouselEffect1() {
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
            <div className={styles.hero__img}></div>
            </div>
  )
}

export default CarouselEffect1