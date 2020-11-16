// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: #2a2a2e;
  border: 1px solid #ffffff;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  height: 250px;
  position: absolute;
  left: 1rem;
  opacity: ${({ isDropdownOpen }) => (!isDropdownOpen ? "0" : "1")};
  top: 70px;
  transition: all 100ms linear;
  visibility: ${({ isDropdownOpen }) =>
    !isDropdownOpen ? "hidden" : "visible"};
  width: 500px;
  z-index: 2;

  @media screen and (max-width: 534px) {
    height: 50vh;
    width: 80vw;
  }
`;

// Element: Layout
export const Layout = styled.div`
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
  width: 100%;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #19191c;
  border-right: 1px solid #6a6a6d;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 534px) {
    display: none;
    visibility: hidden;
  }

  & svg {
    fill: #ffffff;
    height: 80px;
    margin-bottom: 1rem;
    width: 80px;
  }

  & p {
    color: #ebebeb;
  }
`;

// Element: PatientContainer
export const PatientContainer = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  flex: 2.5;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

// Element: PatientName
export const PatientName = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 1.6rem;
  height: 70%;
  letter-spacing: 1px;
  padding-top: 1rem;
  padding-bottom: 0;
  padding-left: 2rem;
  padding-right: 0;
  width: 100%;

  @media screen and (max-width: 534px) {
    padding-top: 0;
    border-bottom: 1px solid #6a6a6d;
  }
`;

// Element: PatientWrapper
export const PatientWrapper = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 534px) {
    flex-direction: column;
  }
`;

// Element: PatientDetails
export const PatientDetails = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;

  & p {
    color: #ebebeb;
    padding: 2px 0;
  }
`;

// Element: PatientOther
export const PatientOther = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;

  & p {
    color: #ebebeb;
    padding: 2px 0;
  }
`;
