export const ProductCatalog=(props)=>{
    return(
  <>
  <img src={props.detail.imgSource}></img>
  <a href={props.detail.prodLink}>Buy here</a>
  <h3>Price : {props.detail.price}</h3>
  </>
    )
  }
  