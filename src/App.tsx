import React from 'react';
import './App.scss';

import { useAppDispatch } from "./helper/hooks";
import { fetchProducts } from "./store/slices/productsSlice";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <button onClick={()=>{dispatch(fetchProducts());}}>click</button>
    </div>
  );
}

export default App;
