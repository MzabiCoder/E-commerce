import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'


const ProductContext=React.createContext();


  class ProductProvider extends Component {

    state={
        products:[],
        detailProduct
    }

    componentDidMount(){
      let tempProduct=[]
   storeProducts.forEach(item=>{
     const singleitem={...item}
     tempProduct=[...tempProduct,singleitem]
   })
   this.setState(()=>{ 
    return {  products:tempProduct}
     
    })

    }

//  setProducts=()=>{
//    let tempProduct=[]
//    storeProducts.forEach(item=>{
//      const singleitem={...item}
//      tempProduct=[...tempProduct,singleitem]
//    })
//    this.setState(()=>{ 
//     return {  products:tempProduct}
     
//     })

//     //console.log(this.state);


//  }


    handledetail=()=>{
        console.log('hellow from handle details')
    }
    addcart=(id)=>{
        console.log(id)
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
