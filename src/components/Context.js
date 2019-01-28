import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'


const ProductContext=React.createContext();


  class ProductProvider extends Component {

    state={
        products:storeProducts,
        detailProduct
    }

    handledetail=()=>{
        console.log('hellow from handle details')
    }
    addcart=()=>{
        console.log('hellow from addcart')
    }
    
  render() {
    return (
      <ProductContext.Provider value={
        {...this.state,
        handledetail:this.handledetail,
        addcart:this.addcart
        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer= ProductContext.Consumer;
export { ProductProvider, ProductConsumer}
