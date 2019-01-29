import React, { Component } from 'react'
import TItle from '../TItle'
import CartColumn from './CartColumn'
import Empty from './Empty'
import {ProductConsumer} from '../Context'
import CartList from './CartList'


export default class Cart extends Component {
  render() {
    return (
       <section>     
    <ProductConsumer>
     {
       value=>{
         const {cart}=value
         
        if (cart.length>0){
          return (
            <React.Fragment>
            <TItle name="Your" title="Cart"/>
           <CartList value={value}/>
           </React.Fragment>
          )
         
        }else{
          return  <Empty/>
        }
       } }
        
      </ProductConsumer>
      </section>
    ) 
    
  }
}
