// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0;
  margin-right: 0;
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
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  & h4 {
    color: #414141;
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
  }
`;