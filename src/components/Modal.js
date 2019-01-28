import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from './Context'
import {buttoncontainer} from './button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {

  render() {
    return (
        <ProductConsumer>
         {value=>{
       console.log(value)
        const {openModal,closeModal}=value
        const {img,title,price}=value.mdalProduct
        if (!openModal){
            return null

        }else {
            return (
               <ModalContainer>
               <div className="conatiner">
               <div className="row">
               <div className="col-8-mx col-md-6 col-lg-4 text-center text-capitalize" id="modal">
               <h5>item Added to the cart</h5>
               
               </div></div>
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
 


`
