// Import: Dependencies
import styled from "styled-components/macro";

// Styled: Container
export const Container = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  overflow-x: auto;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
`;

// Styled: Options
export const Options = styled.ul`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  width: 100%;

  & a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 3px solid transparent;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: flex-start;
    -ms-flex-pack: flex-start;
    justify-content: flex-start;
    padding: 0.8rem 2rem;

    &:hover {
      & li {
        color: #2c2c2c;
        transition: color 150ms linear;
      }

      & svg {
        fill: #2c2c2c;
        transition: fill 150ms linear;
      }
    }

    & svg {
      fill: #414141;
      height: 30px;
      transition: fill 150ms linear;
      width: 46px;
    }

    & li {
      color: #414141;
      display: inline;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding-top: 0.2rem;
      transition: color 150ms linear;
    }
  }
`;
