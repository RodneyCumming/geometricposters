import styled from "styled-components"
import Img from "gatsby-image"

export const Product = styled.div`
  background: #c5d0d5;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  transition: box-shadow 0.3s;
  position: relative;
  padding: 30px 0;
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */

  :hover {
    /* box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12); */
    cursor: pointer;
    /* transition: all 0.3s; */
    /* transform: translate(-2px,-2px); */
  }
`

export const Shadow = styled.img`
  height: 260px;
  position: relative;
  left: -35.5px;
`

export const ProductImage = styled(Img)`
  position: relative;
  left: -35.5px;
`

export const WallShadow = styled.div`
  height: 40px;
  border-top: 1px solid rgba(132, 132, 132, 0.15);
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(2, 2, 2, 0.05), transparent);
`

export const AddToCartButton = styled.button`
  background: #097dce;
  color: white;
  font-size: 16px;
  padding: 15px 20px;
  border-radius: 8px;
  position: absolute;
  bottom: 20px;
  right: 35px;
  cursor: pointer;
  opacity: 0;

  :hover {
    background: #2aa0f2;
    transition: background 0.2s 0;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  :hover {
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
    ${AddToCartButton} {
      opacity: 1;
      transition: all 0.3s;
    }
  }
`
