import styled from 'styled-components'

export const ButtonContainer=styled.button`
 text-transform : uppercase;
 font-seize:1.4rem;
 background:transparent;
 border:6px solid var(--lightBleu);
 padding:.3rem;
 font-weight:bold;
 cursor:pointer;
 transition: all .5s ease-in-out;
 :hover{
   background:var(--mainBlue);
   color:white;
 }

 :focus{
   outline:none;
 }
 
`