import React,{ useEffect } from 'react';
import './App.scss';

import { selectProducts } from './store/slices/productsSlice'

// components
import ThemeBlock from './components/ThemeBlock'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useAppDispatch, useAppSelector } from "./helper/hooks";
import { fetchProducts } from "./store/slices/productsSlice";

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectProducts);
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  return (
    <div className="App">
      <ThemeBlock themeBlockInfo={data}/>
    </div>
  );
}

export default App;
