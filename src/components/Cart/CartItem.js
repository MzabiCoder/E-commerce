import React from 'react'

export default function CartItem({item,value}) {
    const {id,img,price,total,count,title}=item
    const {increment,decrement,removeItem}=value
    //console.log(removeItem())
  return (
    <React.Fragment>
     <div className="row text-center">


     <div className="col-10 mx-auto col-lg-2 d-lg-hidden">
     <img src={img} className="img-fluid" style={{width:'5rem', height:'5rem'}} alt=""/>
     </div>

     <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none font-weight-bold">product : </span>
      {title}

     </div>


     
     <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none font-weight-bold">price : </span>
      {price}$

     </div>


     <div className="col-10 mx-auto col-lg-2">
     <div className="d-flex justify-content-center">
      <div>
      <span id="btn" className="btn btn-black mx-1"   onClick={()=>decrement(id)}>-</span>

      <span id="btn2" className="btn btn-black mx-1"   >{count}</span>

      <span id="btn2" className="btn btn-black mx-1"   onClick={()=>increment(id)}>+</span>

      </div>
     
     </div>
    </div>


    <div className="col-10 mx-auto col-lg-2">
     <div className="cart-icon">
     <i className="fas fa-trash" onClick={()=>removeItem(id)}></i>
     </div>     

     </div>

    <div className="col-10 mx-auto col-lg-2">
    <strong>item total: $ {total}</strong>      

     </div>


     </div>
    </React.Fragment>
  )
}
