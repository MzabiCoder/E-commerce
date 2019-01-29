import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'


const ProductContext=React.createContext();


  class ProductProvider extends Component {

    state={
        products:[],
        detailProduct,
        cart:[],
        modalOpen:false,
        mdalProduct:detailProduct
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

  gettem=(id)=>{
  
     const product=this.state.products.find(item=>item.id===id)
     return product

  }

    handledetail=(id)=>{
      
      const product=this.gettem(id)
      console.log(product)
      this.setState({
        detailProduct:product
      })

    }

    

    addcart=(id)=>{
      let temp=[...this.state.products]
      const index = temp.indexOf(this.gettem(id))
      // console.log(index);
      const product=temp[index];
    //  console.log(product);

      product.inCart=!product.inCart
      product.count=1
      product.total=index.price

      this.setState({
        products:temp,
        cart:[...this.state.cart,product]
      },()=>{
      // console.log(this.state)
      })

   
        
    }

    openModal=id=>{
      const product=this.gettem(id)
      this.setState({
       
        modalOpen:true,
        mdalProduct:product
      })
    }


closeModal=()=>{
 this.setState({
  modalOpen:false,
 })
}
    
  render() {
    return (
      <ProductContext.Provider value={
        {...this.state,
        handledetail:this.handledetail,
        addcart:this.addcart,
        openModal:this.openModal,
        closeModal:this.closeModal

        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer= ProductContext.Consumer;
export { ProductProvider, ProductConsumer}
