import { IntroDetails } from "./IntroDetails"
export const ProductCatalog=(props)=>{
    return(
  <>
  
  <a href={props.prodLink}>Buy here</a>
<IntroDetails price={props.price}></IntroDetails>
  </>
    )
  }
  