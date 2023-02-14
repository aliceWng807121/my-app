import React from 'react';
import './App.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useAppDispatch } from "./helper/hooks";
import { fetchProducts } from "./store/slices/productsSlice";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      {/* <button onClick={()=>{dispatch(fetchProducts());}}>click</button> */}

      <div className="themeBlock">
        <div className="themeBlock_tagPage">
          <div className="themeBlock_tagPage_title">
          野餐趣
          </div>
          <div className="themeBlock_tagPage_title">
          主題禦寒
          </div>
        </div>
        <div className="themeBlock_titleContent">
        <div className="themeBlock_titleContent_flag">主題推薦</div>
        <div className="themeBlock_titleContent_title">記錄回憶首選💑</div>
        <div className="themeBlock_titleContent_tags">
          <a className="tag" href="#">#和你隨拍隨玩</a>
          <a className="tag" href="#">#送500P</a>
          <a className="tag" href="#">#電暖器1</a>
          <a className="tag" href="#">#電暖器2</a>
          <a className="tag" href="#">#電暖qweeqwe器2</a>
          <a className="tag" href="#">#電rfwet暖qw器3</a>
        </div>
        </div>
        <div className="themeBlock_titleImg">
        <img src="https://picsum.photos/200/300?random=1" alt="" />
        </div>
        <div className="themeBlock_carousel">
        <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="productsDisplay">
            <a href='#' className="productsDisplay_product">
              <div className="productsDisplay_product_Img">
                <img src="https://picsum.photos/id/120/152/152" alt="" />
              </div>
              <div className="productsDisplay_product_Name">商品名品名品名名品名vdfvgdbdfgbhedbfsxndfgn稱1</div>
              <div className="productsDisplay_product_Price">商品價格1000</div>
            </a>
            <a href='#' className="productsDisplay_product">
              <div className="productsDisplay_product_Img">
                <img src="https://picsum.photos/id/120/152/152" alt="" />
              </div>
              <div className="productsDisplay_product_Name">商品名稱1</div>
              <div className="productsDisplay_product_Price">商品價格1</div>
            </a>
            <a href='#' className="productsDisplay_product">
              <div className="productsDisplay_product_Img">
                <img src="https://picsum.photos/id/120/152/152" alt="" />
              </div>
              <div className="productsDisplay_product_Name">商品名稱1</div>
              <div className="productsDisplay_product_Price">商品價格1</div>
            </a>
            <a href='#' className="productsDisplay_product">
              <div className="productsDisplay_product_Img">
                <img src="https://picsum.photos/id/120/152/152" alt="" />
              </div>
              <div className="productsDisplay_product_Name">商品名稱1</div>
              <div className="productsDisplay_product_Price">商品價格1</div>
            </a>
            <a href='#' className="productsDisplay_product">
              <div className="productsDisplay_product_Img">
                <img src="https://picsum.photos/id/120/152/152" alt="" />
              </div>
              <div className="productsDisplay_product_Name">商品名稱1</div>
              <div className="productsDisplay_product_Price">商品價格1</div>
            </a>
            <a href='#' className="productsDisplay_product">
              <div className="productsDisplay_product_Img">
                <img src="https://picsum.photos/id/120/152/152" alt="" />
              </div>
              <div className="productsDisplay_product_Name">商品名稱1</div>
              <div className="productsDisplay_product_Price">商品價格1</div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
}

export default App;
