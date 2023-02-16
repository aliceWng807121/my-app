import React,{ useEffect, useState, useRef } from 'react';
// scss
import './style.scss';
// helper hook
import { useAppDispatch,useAppSelector } from "../../helper/hooks";
// slice action
import { changeTagPage } from '../../store/slices/productsSlice'
// component
import MySwiper from '../MySwiper'


const ThemeBlock:React.FC<{themeBlockInfo:productsDeclaration.IthemeBlock[] | null}> = ({themeBlockInfo}) => {
  const dispatch = useAppDispatch();
  const { currentTagPage } = useAppSelector((state)=>state.productsSlice);
  const [currentShowProductGroup,setCurrentShowProductGroup] = useState<productsDeclaration.IthemeBlock | null>(null);

  useEffect(()=>{
    if(themeBlockInfo){
      filterCurrentShowProductGroup(themeBlockInfo);
    }
  },[currentTagPage])

  function handleChangeTagPage(tagName:string){
    dispatch(changeTagPage(tagName));
  }

  function filterCurrentShowProductGroup(themeBlockInfo:productsDeclaration.IthemeBlock[]){
    let CurrentShowProductGroupItem = themeBlockInfo?.filter((item)=>{
      return currentTagPage === item.tabPageName
    })
    setCurrentShowProductGroup(CurrentShowProductGroupItem[0])
  }

    return(
      <div className="themeBlock">
        <div className="themeBlock_tagPage">
          {
            themeBlockInfo?.map((tag)=>{
              return (
                <div className={`themeBlock_tagPage_title ${ currentTagPage === tag.tabPageName && 'action'}` } key={tag.tabPageName} onClick={(()=>{
                  handleChangeTagPage(tag.tabPageName)
                })}>
                  {tag.tabPageName}
                </div>
              )
            })
          }
        </div>
        {
          currentShowProductGroup &&
          <>
            <div className="themeBlock_titleContent">
                <div className="themeBlock_titleContent_flag">主題推薦</div>
                <div className="themeBlock_titleContent_title">{ currentShowProductGroup.eventTitle }</div>
                <div className="themeBlock_titleContent_tags">
                  {
                    currentShowProductGroup.tagLinks.map((tagItem)=>{
                      return (
                        tagItem.text &&
                        <a className="tag" href="tagItem.url">{tagItem.text}</a>
                      )
                    })
                  }
                </div>
            </div>
            <div className="themeBlock_titleImg">
                <img src={currentShowProductGroup.eventImgSrc} alt="" />
            </div>
            <div className="themeBlock_carousel">
              <MySwiper products={currentShowProductGroup.productDetails}/>
            </div>
          </>
        }
      </div>
    )
}

export default ThemeBlock;
