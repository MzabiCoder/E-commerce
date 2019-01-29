import React from 'react'

export default function CartColumn() {
  return (
    <React.Fragment>
    <div className="container-fluid text-center  sd-lg-block">
      <div className="row py-5 text-center">

     <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">product</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">name of product</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">price</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">quatity</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">remove</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">total</p>
     </div>

      </div>
      </div>
      </React.Fragment>

  )
}
