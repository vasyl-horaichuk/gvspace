import styled from 'styled-components';

export const ButtonName = styled.button`
  padding: 15px 70px;
  border: transparent;
  /* barlow */
  /* font-family: Barlow; */
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  /* line-height: normal;  */
  color: #fff;
  cursor: pointer;
  background: #9b51e0;
  box-shadow: 0px 7px 30px 0px rgba(77, 45, 102, 0.1) inset;

  &:hover {
    background: var(--Purple-1, #9b51e0);
    box-shadow: 0px 7px 30px 0px rgba(77, 45, 102, 0.6) inset;
  }
`;
