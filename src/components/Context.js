import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'


const ProductContext=React.createContext();


  class ProductProvider extends Component {

    state={
        products:[],
        detailProduct,
        cart:[],
        modalOpen:false,
        mdalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0
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
     // console.log(product)
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
      let price=product.price
      product.total=price
      

      this.setState({
        products:temp,
        cart:[...this.state.cart,product]
      },()=>{
        this.addTotal()
      })

   
        
    }

    openModal=id=>{
      const product=this.gettem(id)
      this.setState({
       
        modalOpen:true,
        mdalProduct:product
      })
    }

   addTotal=()=>{
     let cartSubtotal=0;
     this.state.cart.map(item=>{
      cartSubtotal+=item.total

     })

     const tempTax=cartSubtotal*0.1;
     const cartTax=parseFloat(tempTax.toFixed(2))
     const cartTotal =cartSubtotal+cartTax;

      this.setState({
        cartSubtotal,
        cartTax,
        cartTotal

      })
    

   } 


closeModal=()=>{
 this.setState({
  modalOpen:false,
 })
}

increment=id=>{
  console.log('this is increment')
 let tempC=[...this.state.cart]
  const selectedP=tempC.find(item=>item.id===id)

  const index=tempC.indexOf(selectedP)
  const product=tempC[index]
     
  product.count=product.count+1
  product.total=product.price*selectedP.count

  this.setState({
    cart:tempC
  },()=>this.addTotal())
  
}
decrement=id=>{
  console.log('this is decrement')

  let tempC=[...this.state.cart]
  const selectedP=tempC.find(item=>item.id===id)

  const index=tempC.indexOf(selectedP)
  const product=tempC[index]
     
  product.count=product.count-1
  product.total=product.price*selectedP.count

  this.setState({
    cart:tempC
  },()=>this.addTotal())
  

}

removeItem=(id)=>{

  let tempC=[...this.state.cart]
  let tempP=[...this.state.products]
   tempC=tempC.filter(val=>val.id!==id)

   const index = tempP.indexOf(this.gettem(id));
   const product=tempP[index];
   product.inCart=false
   product.count=0
   product.total=0


    this.setState({
      cart:[...tempC]
    },()=>{
      this.addTotal()
    })
}

clearCart=()=>{
  console.log('cart was cleared');
  let temp=[...this.state.products]
   temp.map(val=>{
     return val.inCart=false
    })

  this.setState({
      
      product:temp,
      cart:[],
      cartSubtotal:0,
      cartTax:0,
      cartTotal:0

  })
}
    
  render() {
    return (
      <ProductContext.Provider value={
        {...this.state,
        handledetail:this.handledetail,
        addcart:this.addcart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        clearCart:this.clearCart,
        removeItem:this.removeItem

        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer= ProductContext.Consumer;
export { ProductProvider, ProductConsumer}
