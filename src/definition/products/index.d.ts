import { type } from "os"
declare global{
  namespace productsDeclaration{
    export type T_TagLinks = {
      text:string,
      url:string
      }
    
    export type T_ProductDetails = {
      id:number,
      name:string,
      price:number,
      imgSrc:string ,
      productUrl:string,
    }
    
    export interface IthemeBlock{
      tabPageName:string,
      eventTitle:string,
      eventImgSrc:string,
      eventImgAlt:string,
      tagLinks:ITagLinks[],
      productDetails:IProductDetails[]
    }
    
    export interface IproductsSliceInitialState{
      data: IthemeBlock[] | null,
      isLoading:boolean,
      currentTagPage:string,
      error:boolean
    }
  }
}