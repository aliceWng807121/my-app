import { type } from "os"

export type ITagLinks = {
  text:string,
  url:string
  }

export type IProductDetails = {
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