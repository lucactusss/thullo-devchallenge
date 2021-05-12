import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 6vh;
  width: 100vw;
  border-bottom: 1px solid #b5b5b7;
  display: flex;
  justify-content: flex-start;

  .bookmarker-name {
    padding-top: 15px;
    flex: 0 1 auto;
    font-size: 25px;
    width: 250px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-start;
  }

  .logo {
    font-size: 30px;
    margin-left: 5px;
    margin-top: -1px;
    flex: 0 1 auto;
  }

  .theme-toggle {
    flex: 0 1 auto;
    width: 100px;
    height: 100px;
    margin-left: auto;
  }
`;
