import React from 'react'
import {Link} from 'react-router-dom'
import img from '../logo.png'
import styled from 'styled-components'
import {ButtonContainer} from './button'


export default function Navbar() {
  return (
    <NavWrapper className="navbar bg-success navbar-expand-sm navbar-dark px-sm-5">
    <Link to="/">
     <img src={img} alt=""  width="70px" height="70px" className="navbar-brand"/>
    
    </Link>
     <ul className="navbar-nav align-items-center">
      <li className="nav-item ml-5">
      <Link to="/" className="nav-link">
       <h3 className="ml-5" >Products</h3>  
      </Link>
      </li>
     </ul>
     <Link to="/cart" className="ml-auto">
     <ButtonContainer> 
      <span className="mr-2">
     <i className="fas fa-cart-plus"/>myCart
     </span>
     </ButtonContainer>
     </Link>
 
     </NavWrapper>
  )
}

const NavWrapper = styled.nav`
background: var(--mainBlue)!important;
 .nav-link{
   color:var(--mainWhite) !important;
   font-size:1rem;
   text-transform:uppercase;
 }
`

