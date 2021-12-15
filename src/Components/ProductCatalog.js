export const ProductCatalog=(props)=>{
    return(
  <>
  <img src={props.imgSource}></img>
  <a href={props.prodLink}>Buy here</a>
  <h3>Price : {props.price}</h3>
  </>
    )
  }
  