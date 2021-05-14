// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  background: #2a2a2e;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  height: 55px;
  max-width: 100%;
  min-height: 55px;
  min-width: 100%;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 54px;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  margin: 0 1rem;
`;

// Element: Logo
export const Logo = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  & span {
    color: #ebebeb;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

// Element: DropdownButton
export const DropdownButton = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 1rem;
  width: auto;

  & svg {
    fill: #ebebeb;
    height: 30px;
    transition: fill 150ms linear;
    width: 30px;

    &:hover {
      fill: #ffffff;
      transition: fill 150ms linear;
    }
  }
`;
