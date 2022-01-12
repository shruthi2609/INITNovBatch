import { IntroDetails } from "./Components/IntroDetails"
import { ProductCatalog } from "./Components/ProductCatalog"
import ProductCatalogClass from "./Components/ClassComponent"
import TodoComponent from './Components/TodoComponent'
import LifeCycleMethods from "./Components/LifeCycleMethods"
import TodoAPI from "./Components/TodoApI"
import ImageSearchAPI from "./Components/ImageSearchAPI"
import HooksEg from "./Components/HooksEg"
import ChatEg from "./Components/ChatEg"
import CounterHooks from "./Components/CounterHooks"
import ImageAPIHooks from "./Components/ImageAPIHooks"
import HookLifeCycle from "./Components/HookLifeCycle"
import NewsAPIHooks from "./Components/NewsAPIHooks"
import Profile from "./Components/Profile"
import Login from "./Components/Login"
import LifeCycleMethod from "./Components/LifeCycleMethod"
import {BrowserRouter as Router, Routes , Route , Link} from "react-router-dom"
import LoginPage from "./Components/LoginPage"
export const App=()=>{
  return(
  <div>
<Router>
  <div>
    <nav>
      <Link to="/profile">Profile</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Imagesearch">Search</Link>
    </nav>
    <Routes>
      <Route path="/profile"></Route>
      <Route path="/Login" element={<Login></Login>}> </Route>
      <Route path="/Imagesearch" element={<ImageSearchAPI></ImageSearchAPI>}> </Route>
    </Routes>
  </div>
</Router>
</div>
  )
}

//export default
//export by component name
//MVC - MODEL VIEW CONTROLERS
