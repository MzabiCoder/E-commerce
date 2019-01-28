import React, { Component } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
//import { buttoncontainer } from './buttoncontainer'
import styled from 'styled-components'



export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
      {value=>{
  const {id,
    title,
    img,
    price,
    company,
    info,
    inCart
  } = value.detailProduct
  // console.log(id)
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
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by: <span className="text-uppercase">
              
              <strong>{company}</strong></span>
              </h4>
              <h4 className="text-blue"><strong>price : <span>$</span>
              {price}
              </strong></h4>
              <p className="text-capitilize font-weight-bold mt-3 mb-0"> </p>
              some info product:
              <div className="text-muted lead">
              {info}
              </div>

              <div className="div">
              <Link to="/">
              <ButtonContainer>
               Product
              </ButtonContainer>
              </Link>
              <ButtonContainer cart onClick={()=>{
                value.addcart(id)
                value.openModal(id)
              }
          
              } disabled={inCart ? true: false }>
              {inCart ? "inCart" :"Add to cart"}
             </ButtonContainer>
             

              </div>
            </div>
           </div>
          
          </div>
        )
      }}
      </ProductConsumer>
    )
  }
}

export const ButtonContainer=styled.button`
 text-transform : uppercase;
 font-seize:1.4rem;
 background:transparent;
 border:6px solid var(--lightBleu);
 border-color:${props=>
  props.cart ? "var(--mainYellow)" :"var(--lightBleu)"
};
color:${props=>
  props.cart ? "var(--mainYellow)" :"var(--lightBleu)"
};
 padding:.3rem;
 margin-top:.7rem;
 font-weight:bold;
 margin-right:1rem;
 cursor:pointer;
 transition: all .5s ease-in-out;
 :hover{
   background:var(--mainBlue);
   color:white;
 }

 :focus{
   outline:none;
 }
 
`
