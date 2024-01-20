import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";

const ProductWrapper = styled.div``;
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;
const ProductInfoBox = styled.div`
  margin-top: 5px;
`;
const PriceRow = styled.div`
//   display: block;
  display:flex;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     gap: 5px;
//   }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
const Price = styled.div`
  font-size: 1.1rem;
  font-weight:1000;
  text-align: right;
//   @media screen and (min-width: 768px) {
//     font-size: 1.2rem;
//     font-weight:600;
//     text-align: left;
  }
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const Url = '/product'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={Url}>
        <img src={images[0]} alt="" />
      </WhiteBox>

      <ProductInfoBox>
        <Title href={Url}>{title}</Title>
        <PriceRow>
          <Price>₹{price}</Price>

          <Button primary outline>
            
            {/* <CartIcon /> */}
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
