export const IntroDetails=(props)=>{
console.log(props.intro.cName)
  return(
      <>
      <h1>{props.intro.cName}  Product Catalog</h1>
      <h2>Product Details for home appliances</h2>
      </>
  )
}
export const ProductCatalog=(props)=>{
  return(
<>
<img src={props.detail.imgSource}></img>
<a href={props.detail.prodLink}>Buy here</a>
<h3>Price : {props.detail.price}</h3>
</>
  )
}

//export default
//export by component name
