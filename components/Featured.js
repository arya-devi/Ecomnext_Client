import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

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
                <Button primary={1} >
                  Add to cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  </svg>
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
