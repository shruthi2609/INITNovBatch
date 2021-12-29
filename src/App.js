import { IntroDetails } from "./Components/IntroDetails"
import { ProductCatalog } from "./Components/ProductCatalog"
import ProductCatalogClass from "./Components/ClassComponent"
import TodoComponent from './Components/TodoComponent'
import LifeCycleMethods from "./Components/LifeCycleMethods"
import TodoAPI from "./Components/TodoApI"
import ImageSearchAPI from "./Components/ImageSearchAPI"

export const App=()=>{
  return(
  <div>
<ImageSearchAPI></ImageSearchAPI>
<ProductCatalog prodLink="https://amazon.in"
price="Rs.5000"
></ProductCatalog>

</div>
  )
}

//export default
//export by component name
