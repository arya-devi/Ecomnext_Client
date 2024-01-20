import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
  `;
  const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    // font-size:3rem
    letter-spacing:.4rem
    
  `;
  const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
  `;
  const ColumsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img {
      max-width: 100%;
    }
  `;
  const Column = styled.div`
    display: flex;
    align-items: center;
  `;
  const ButtonsWraper = styled.div`
    display: flex;
    gap: 10px;
    margin-top:25px;
  `;

export default function Featured({product}) {
  
  return (
    <Bg>
      <Center>
        <ColumsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>
                {product.description}
              </Desc>
              <ButtonsWraper>
                <ButtonLink href={'/products/'+product._id}  outline={1} white={1} >
                  Read more
                </ButtonLink >
                <Button white={1} >
                  Add to cart
                  <CartIcon/>
                </Button>
              </ButtonsWraper>
            </div>
          </Column>
          <Column>
            <img
              src="https://p3-ofp.static.pub/fes/cms/2022/09/26/2iyatiq8hm73muwpfvprj04shz6l6j449337.png"
              alt=""
            />
          </Column>
        </ColumsWrapper>
      </Center>
    </Bg>
  );
}
