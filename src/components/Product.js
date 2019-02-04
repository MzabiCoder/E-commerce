import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'
import PropTypes from 'prop-types';


export default class Product extends Component {
  render() {
     const {id,title,img,price,inCart}=this.props.product
   //console.log(this.props)
    return (


      <Wrapper className="col-md-6 col-lg-4 text-center mb-2">
  
     <div className="card">
     <ProductConsumer>
    {value=>(
     //  
       //const {handledetail,addcart} = value
      
        <div className="img-container p-5" onClick={()=>value.handledetail(id)}>
        <Link to="/details">
        <img src={img} className="card-img-top" alt=""/>
        </Link>
  
        <button className="cart-btn mt-3" disabled={inCart ? true : false }
        onClick={()=>{
          value.addcart(id)
          value.openModal(id)
        }}

        >
        {  inCart ? (<p className="text-capitalize mb-0" disabled >In Cart</p>) : (<i className="fas fa-cart-plus"></i>)  }
        </button>
        </div>
      
    )}
   
     
      </ProductConsumer>

      <div className="card-footer d-flex flex justify-content-between">
      <p className="align-self-center mb-0">
      {title}
      </p>
      <h5 className="text-blue font-italic mb-0">
      <span className="mr-1">$ {price}</span>
      </h5>
      </div>
     </div>
    
      </Wrapper>





    )
  }
}

Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool


  }).isRequired
}

const Wrapper=styled.div`
 
 .card{
   border-color:transparent;
   transition:all 1s;
   cursor:pointer;
  
 }

 .card-footer{
   background:none;
   border:none;
   transition:all 1s;
   
 }
 img{
  transition:all 1s;
  

 }

 button{
   background:var(--lightBleu)!important;
   color:white;
   border:none;
   padding:.3rem;
   color:var(--mainWhite);
   border-top-left-radius:10px;
   position:absolute;
   bottom:0;
   right:0;
   cursor:pointer;
   transform:translate(100%,100%);
   transition:all 1s;

   
  
 }

 :hover{
    .card{
      border:.1rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
      

    }
    .card-footer{
      background:gray
    }

    
 }

 .img-container{
   position:relative;
   overflow:hidden;
   :hover img{
    transform: scale(1.6);
   }
   :hover button{
     transform:translate(0,0);
   }
 }



`
