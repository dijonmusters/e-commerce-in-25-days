import styled from "styled-components";
import { FiX } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { useRouter } from "next/router";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: white;
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.2s ease-in;
`;

const X = styled(FiX)`
  font-size: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const XContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  padding: 1rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  border-bottom: 1px solid #efefef;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 0.25rem;
`;

const Ul = styled.ul`
  padding: 0;
`;

const Total = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background: linear-gradient(to right, #fc00ff, #00dbde);
  font-size: 2rem;
  color: inherit;
  outline: none;
  border: none;
  width: 100%;
  padding: 1rem;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Cart = () => {
  const { cart, isOpen, openCart, closeCart, total } = useCart();
  const router = useRouter();

  const handleClick = () => {
    closeCart();
  };

  const navigateToCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <Container isOpen={isOpen}>
      <XContainer>
        <X onClick={handleClick} />
      </XContainer>
      <Content>
        <Title>Cart</Title>
        {cart.length > 0 ? (
          <>
            <Ul>
              {cart.map((item) => {
                return (
                  <Item>
                    <span>
                      {item.qty}x {item.name}
                    </span>
                    <span>${item.price / 100}</span>
                  </Item>
                );
              })}
            </Ul>
            <Total>
              <span>Total</span>
              <span>${total / 100}</span>
            </Total>
            <Button onClick={navigateToCheckout}>Checkout</Button>
          </>
        ) : (
          <p>Cart is empty!</p>
        )}
      </Content>
    </Container>
  );
};

export default Cart;
