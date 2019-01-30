import React, { Component } from 'react'

export default class Error extends Component {
  
  render() {
    
    return (
     <React.Fragment>
     <div className="container">
     <div className="row text-center">
     <div className="col-10 mx-auto text-title text-uppercase pt-5">
     <h1 className="display-3">404</h1>
     <h1> <strong>error</strong></h1>
     <h1> <strong> page not found</strong></h1>
     <h3>  <strong> the request URL :<span className="text-danger">" {this.props.location.pathname} "</span> was not found </strong></h3>
     </div>
     </div>
     </div>
     
     </React.Fragment>
    )
  }
}
