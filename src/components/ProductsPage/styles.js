import styled from "styled-components"
import screenSize from "../../styles/screenSize"

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
  grid-gap: 50px;
  margin: 40px 0;

  ${screenSize.minDesktop`
  margin: 100px 0; 
  `};
`
