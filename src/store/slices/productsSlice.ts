import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import { productsApi } from '../../services/index'

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await productsApi.fetchProducts();
    console.log('data',response);
    return response;
  });

  const initialState = {
    data: [],
    isLoading: false,
    error: false
  };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isLoading = true;
      });
  }
});

export default productsSlice.reducer;
