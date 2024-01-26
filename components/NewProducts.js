import styled from "styled-components"
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";



const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: 800;
  color: #2d2d2e;
  
`;
export default function NewProducts({products}){
    return(
        <Center>
            <Title>Recent Releases</Title>
            <ProductsGrid products={products}/>
        </Center>
    )
}