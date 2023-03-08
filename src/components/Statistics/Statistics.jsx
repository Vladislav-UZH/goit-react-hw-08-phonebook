import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
// STYLES
const TRANSITION_STYLE = `cubic-bezier(0.075, 0.82, 0.165, 1) 300ms`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  /* align-items: center;
  justify-content: center; */
  padding: 50px 15px;
  min-height: 150px;
  background-color: #32343b;
`;
const Chart = styled.div`
  margin-top: auto;
  width: 100px;
  transition: transform ${TRANSITION_STYLE};
  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;
const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ length }) => {
    if (!length) {
      return `
        background-color: transparent;
        border-top: #e2580a solid 1px;
        border-left: #e2580a solid 1px;
        border-right: #e2580a solid 1px;
        height: 110px;
        `;
    }
    return `height:${length}px;
     background-color: #e2580a;
`;
  }}
`;
const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
const SubBlock = styled.div`
  padding: 10px 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  background-color: #585a63;
  border: #585a63 solid 1px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
// COMPONENT
export const Statistics = () => {
  const contacts = useSelector(selectContacts);
  const quantity = contacts.length;

  const calculateLength = quantity => {
    const length = 15 + Math.max(0, quantity - 15) * 2;
    if (length >= 110) {
      return 110;
    }
    if (!quantity) {
      return false;
    }
    return length;
  };
  //   const k = 2500;
  //   const pxValue = 1;
  //   const pxPerQuantity = (k / (quantity + 1)) * (1 / pxValue);
  //   const normalizedLength = pxPerQuantity.toFixed(0);
  console.log(calculateLength(quantity));
  return (
    <Container>
      <h2> Your statistics</h2>
      <Chart>
        <Column length={calculateLength(quantity)}>
          {' '}
          {quantity ? <Label>{quantity}</Label> : <Label>Nothing</Label>}
        </Column>
        <SubBlock>
          <span>Contacts</span>
        </SubBlock>
      </Chart>
    </Container>
  );
};
