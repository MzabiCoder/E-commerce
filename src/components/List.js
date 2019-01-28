import React, { Component } from 'react'
import Product from './Product'
import TItle from './TItle'
import {ProductConsumer} from './Context'

export default class List extends Component {

 
  render() {
  // console.log(this.state.products)
    return (
  
     
      <React.Fragment>
      <div className="container py-5">
      <TItle name="Our" title="products"/>

       <div className="row pt-5">
        <ProductConsumer>
        {value=>{
          return value.products.map(product=>{
             return <Product key={product.id} product={product}/>
          })
        }}
        </ProductConsumer>
       </div>

      </div>
      </React.Fragment>
        
   
    )
  }
}
