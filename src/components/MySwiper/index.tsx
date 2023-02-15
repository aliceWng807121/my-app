import React,{ useEffect, useState, useRef } from 'react';
// scss
import './style.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation,type Swiper as SwiperRef } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// props interface 
import { IProductDetails } from '../../definition/productsDeclaration'

const MySwiper:React.FC<{products:IProductDetails[]}> = ({products}) =>{
  const [productGroups,setProductGroups] = useState<IProductDetails[][]>([]);
  const [swiper, setSwiper] = useState<SwiperRef>();
  const swiperRef = useRef(null);

  useEffect(()=>{
    handleProductGroups(products);
    if(swiper){
      swiper.slideTo(0);
    }
  },[products])
  function handleProductGroups(products:IProductDetails[]){
    let Group = []
    let productsList = products.slice()
  
    while(productsList.length > 3 ){
      Group.push(productsList.splice(0,6))
    }
    setProductGroups(Group)
  }

  return (
  <Swiper
    pagination={{
      type: "fraction",
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
    ref={swiperRef}
    onSwiper={(swiper) => setSwiper(swiper)}
  >
    {
      productGroups.map((Group)=>{
        return (
          <SwiperSlide>
            <div className="productsDisplay">
            {
                Group.map((productItem) => {
                return (
                <a href={productItem.productUrl} className="productsDisplay_product" key={productItem.id}>
                    <div className="productsDisplay_product_Img">
                    <img src={productItem.imgSrc} alt="" />
                    </div>
                    <div className="productsDisplay_product_Name">{productItem.name}</div>
                    <div className="productsDisplay_product_Price">${productItem.price}</div>
                </a>
                )
                })
            }
            </div>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
  )
}

export default MySwiper;
