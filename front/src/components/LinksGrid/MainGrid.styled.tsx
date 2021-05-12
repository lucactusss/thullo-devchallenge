import styled from 'styled-components';

export const StyledMainGrid = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  div {
    display: flex;
    justify-content: center;
  }
`;
