import React,{ useEffect,useState } from 'react';

import './style.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IthemeBlock,IProductDetails } from '../../definition/interface/productsDeclaration'

import { useAppDispatch,useAppSelector } from "../../helper/hooks";

import { changeTagPage } from '../../store/slices/productsSlice'

const MySwiper:React.FC<{products:IProductDetails[]}> = ({products}) =>{
  const [productGroups,setProductGroups] = useState<IProductDetails[][]>([])

  useEffect(()=>{
    handleProductGroups(products)
  },[])
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
  >
    {
      productGroups.map((Group)=>{
        return (
          <SwiperSlide>
          <div className="productsDisplay">
          {
            Group.map((productItem) => {
              return (
              <a href={productItem.productUrl} className="productsDisplay_product">
                <div className="productsDisplay_product_Img">
                  <img src={productItem.imgSrc} alt="" />
                </div>
                <div className="productsDisplay_product_Name">{productItem.name}</div>
                <div className="productsDisplay_product_Price">{productItem.price}</div>
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

const ThemeBlock:React.FC<{themeBlockInfo:IthemeBlock[] | null}> = ({themeBlockInfo}) => {
  const dispatch = useAppDispatch();
  const { currentTagPage } = useAppSelector((state)=>state.productsSlice);

  function handleChangeTagPage(tagName:string){
    dispatch(changeTagPage(tagName));
  }

    return(
      <div className="themeBlock">
        <div className="themeBlock_tagPage">
          {
            themeBlockInfo?.map((tag)=>{
              return (
                <div className={currentTagPage === tag.tabPageName ? 'themeBlock_tagPage_title action' : 'themeBlock_tagPage_title' } onClick={(()=>{
                  handleChangeTagPage(tag.tabPageName)
                })}>
                  {tag.tabPageName}
                </div>
              )
            })
          }
        </div>
        {
          themeBlockInfo?.map((block)=>{
            return (
              currentTagPage === block.tabPageName &&
              <>
                <div className="themeBlock_titleContent">
                <div className="themeBlock_titleContent_flag">主題推薦</div>
                <div className="themeBlock_titleContent_title">{ block.eventTitle }</div>
                <div className="themeBlock_titleContent_tags">
                  {
                    block.tagLinks.map((tagItem)=>{
                      return (
                        tagItem.text &&
                        <a className="tag" href="tagItem.url">{tagItem.text}</a>
                      )
                    })
                  }
                </div>
                </div>
                <div className="themeBlock_titleImg">
                <img src={block.eventImgSrc} alt="" />
                </div>
                <div className="themeBlock_carousel">
                  <MySwiper products={block.productDetails}/>
                </div>
              
              </>
            )
          })
        }
      </div>
    )
}

export default ThemeBlock;
