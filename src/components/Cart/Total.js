import React from 'react'
import {Link} from 'react-router-dom'

export default function Total({value}) {
const {cartSubtotal,cartTax,cartTotal,clearCart}=value
//console.log(value)
  return (
    <React.Fragment>
     <div className="container mb-5">
     <div className="row">
      <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
      <Link to="/">
      <button onClick={()=>clearCart()} className="btn btn-danger text-uppercase mb-3 px-5">Clear Cart</button>
      </Link>
      <h5>
      <span className="text-title">
      Subtotal:</span>
      <strong>${cartSubtotal}</strong>
      </h5>

      <h5>
      <span className="text-title">
      Tax:</span>
      <strong>${cartTax}</strong>
      </h5>

      <h5>
      <span className="text-title">
      Total:</span>
      <strong>${cartTotal}</strong>
      </h5>
      
      </div>
     </div>
     </div>
      
    </React.Fragment>
  )
}
