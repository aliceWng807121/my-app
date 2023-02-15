import React,{ useEffect,lazy } from 'react';
// style
import './App.scss';
// helper hook
import { useAppDispatch, useAppSelector } from "./helper/hooks";
// select slice
import { selectProducts } from './store/slices/productsSlice'
// slice action
import { fetchProducts } from "./store/slices/productsSlice";

// lazy load
const ThemeBlock = lazy(() => import('./components/ThemeBlock'));


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
