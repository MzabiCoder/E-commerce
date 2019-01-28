import React, { Component } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
import {button} from './button'


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
      {(value)=>{
  const {id,title,img,price,company,info,inCart} = value.detailProduct
   console.log(value)
        return(
          <div className="container">
           <div className="row">
           <div className="col-10 mx-auto text-center texted-slanted text-blue my-5">
           <h1>{title}</h1>
           </div>
           </div>
           <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} className="img-fluid" alt=""/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            
            </div>
           </div>
          
          </div>
        )
      }}
      </ProductConsumer>
    )
  }
}
