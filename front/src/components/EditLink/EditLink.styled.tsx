import styled from 'styled-components';

export const StyledEditLink = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 18px;

  .keyword-list {
    display: flex;
    button {
      margin-left: 10px;
    }
  }

  .modal-title {
    padding-bottom: 10px;
  }

  .select {
    color: black;
    width: 85%;
  }

  .footer {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
