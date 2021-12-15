import React from 'react'
import AddItem from './AddItem'
import LoginPage from './LoginPage'
import { ProductCatalog } from './ProductCatalog'
class ProductCatalogClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
       // this.toggleLoginButton=this.toggleLoginButton.bind(this)
       //bind it in the event handler {this.toggleLoginButton.bind(this)}
    }
    toggleLoginButton=()=>{
       this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    render(){
        return(
            <div>
                <button onClick={this.toggleLoginButton}>SignIn</button>
                <button onClick={this.toggleLoginButton}>SignOut</button>
{this.state.isLoggedIn?
<div>
<ProductCatalog
imgSource="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
prodLink="https://amazon.in"
price="3000"></ProductCatalog>
<AddItem></AddItem>
</div>
:
<LoginPage></LoginPage>} 
            </div>
        )
    }
}
export default ProductCatalogClass;
