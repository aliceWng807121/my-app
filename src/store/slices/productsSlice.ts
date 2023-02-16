import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from '../../services/index'
import { RootState } from '../index'

// 整理工具
import { handleTagLinks, handleProductDetails, getFullImgSrc, getThemeFullImgSrc } from '../../utils/reorganize'

export const fetchProducts= createAsyncThunk("products/fetchProducts", async () => {
    const response = await productsApi.fetchProducts();
    // console.log('data',response.data.window1);
    let tagPageList:productsDeclaration.IthemeBlock[] = []
    for(let i of response.data.window1.Blocks){
      let NodesArr = i.Nodes
      let mainInfo = NodesArr.splice(0,1);
      let tagLinksOrigArr:productsDeclaration.T_TagLinks[] = handleTagLinks(NodesArr.splice(0,5)) ;
      let productDetailsOrigArr = handleProductDetails(NodesArr.splice(0,18)) ;
      tagPageList.push(
        {
        tabPageName:mainInfo[0].Link.Text,
        eventTitle:mainInfo[0].Link.Text1,
        eventImgSrc:getThemeFullImgSrc(mainInfo[0].Img.Src) ,
        eventImgAlt:mainInfo[0].Img.Text,
        tagLinks:tagLinksOrigArr,
        productDetails:productDetailsOrigArr
        }
      )
    }

    return tagPageList;
  });

  const initialState:productsDeclaration.IproductsSliceInitialState = {
    data: null,
    currentTagPage:'',
    isLoading: false,
    error: false
  };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeTagPage(state,action:PayloadAction<string>){
      state.currentTagPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.currentTagPage = action.payload[0].tabPageName
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isLoading = true;
      });
  }
});

export const { changeTagPage } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.productsSlice;
export default productsSlice.reducer;
