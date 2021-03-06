import React from 'react'

export default function TItle({name,title}) {
  return (
  <React.Fragment>
  
  <div className="row">
  <div className="col-10 mx-auto my-2 text-center text-title">
   <h1 className="text-capitalize font-weight-bold">
   {name} <strong className="text-bleu">{title}</strong>
   </h1>
  </div>
  </div>
  </React.Fragment>
  )
}
