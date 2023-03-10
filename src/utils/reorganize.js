
export function handleTagLinks(arr){
    let reClean = []
    for(let i of arr){
        let obj = {
        text:i.Link.Text,
        url:getFullImgSrc(i.Link.Url) ,
        }
        reClean.push(obj)
    }
    return reClean
}

export function handleProductDetails(arr){
    let reClean = []
    for(let i of arr){
        let obj = {
        id:i.Id,
        name:i.Link.Text,
        price:i.Link.Text1,
        imgSrc:getFullImgSrc(i.Img.Src) ,
        productUrl:getFullImgSrc(i.Id)
        }
        reClean.push(obj)
    }
    return reClean
}

export function getFullImgSrc(url){
    const domain = 'https://cs-a.ecimg.tw/'
    return domain + url
}

export function getThemeFullImgSrc(url){
    const domain = 'https://fs-a.ecimg.tw/'
    return domain + url
}