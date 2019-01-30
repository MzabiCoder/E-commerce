import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'

export default class Modal extends Component {

  render() {
    return (
        <ProductConsumer>
         {value=>{
       //console.log(value)
        const {modalOpen,closeModal}=value
        const {img,title,price}=value.mdalProduct
        if (!modalOpen){
            return null;

        }else {
            return (
               <ModalContainer>
               <div className="conatiner">
               <div className="row">
               <div className="col-md-6 col-lg-12 mx-auto text-center text-capitalize p-5" id="modal">
               <h5>item Added to the cart</h5>
               <img src={img} alt="" className="img-fluid"/>
               <h5>{title}</h5>
               <h5 className="text-muted">
               price : $ <span>{price}</span>
               </h5>
               <Link to="/">
               <ButtonContainer onClick={()=>{
                closeModal()
               }}>
               Continue Shopping
               </ButtonContainer>
               <Link to="/cart">
               <ButtonContainer onClick={()=>{
                closeModal()

               }}>
              Go to cart
               </ButtonContainer>
               </Link>
               </Link>
               </div>
               </div>
               </div>

               </ModalContainer>
                )
        }
      
         }}
    
      </ProductConsumer>
    )
  }
}

const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height:100vh;
background:rgba(0,0,0,0.3);
transition:all 1s linear;

#modal{
   background:white;
   transition:all 1s linear;
}
`
export const ButtonContainer=styled.button`
 text-transform : uppercase;
 font-seize:1.4rem;
 background:transparent;
 border:6px solid var(--lightBleu);
 padding:.3rem;
 margin-right:1rem;
 font-weight:bold;
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
