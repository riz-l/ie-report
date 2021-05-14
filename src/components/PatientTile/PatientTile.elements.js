// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  margin: 1rem;
`;

// Element: Section
export const Section = styled.section`
  background: #3a3a40;
  margin-bottom: 1rem;
`;

// Element: Render
export const Render = styled.div`
  padding-top: 0rem;
  padding-bottom: 0rem;
  padding-left: 0;
  padding-right: 0;
`;

// Element: PatientHeading
export const PatientHeading = styled.div`
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  word-wrap: wrap;
  & h2 {
    color: #ebebeb;
    font-weight: 400;
    text-transform: uppercase;

    &:nth-child(2) {
      padding-bottom: 1rem;
    }
  }
`;

// Element: Grid
export const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-gap: 10px;
  -ms-grid-columns: 0.7fr 1fr 1fr 1fr;
  grid-template-columns: 0.7fr 1fr 1fr 1fr;
  height: 100%;
  width: 100%;

  & span {
    color: #e0e0e0;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
`;

// Element: NameContainer
export const NameContainer = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  height: 90%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: auto;
  margin-top: auto;
  text-align: center;
  width: 100%;
`;

// Element: PatientIconContainer
export const PatientIconcontainer = styled.div`
  background: #2a2a2e;
  border-radius: 50%;
  margin-bottom: 1rem;
  padding-top: 1.3rem;
  padding-right: 1.3rem;
  padding-bottom: 1.3rem;
  padding-left: 1.3rem;

  & svg {
    height: 65px;
    fill: #ffffff;
    width: 65px;
  }
`;

// Element: ColumnOne
export const ColumnOne = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  border-right: 2px solid white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  -ms-grid-column: 1;
  grid-column: 1;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: auto;
  margin-right: 2rem;
  margin-top: auto;
  max-width: 100%;
  text-align: center;
  width: 100%;
  word-wrap: wrap;
  @media screen and (max-width: 768px) {
    align-items: center;
    border-right: 0;
    justify-content: center;
    margin-right: 0;
    padding-left: 0;
    padding-top: 0.5rem;
    text-align: center;

    & span {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

// Element: ColumnTwo
export const ColumnTwo = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-grid-column: 2;
  grid-column: 2;
  height: 100%;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  padding-bottom: 8px;
  padding-left: 2rem;
  padding-top: 8px;
  width: 100%;

  & span {
    min-width: 100px;
    text-align: left;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding-left: 0;

    & span {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

// Element: ColumnThree
export const ColumnThree = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-grid-column: 3;
  grid-column: 3;
  height: 100%;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  margin-bottom: auto;
  margin-top: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
  width: 100%;

  & span {
    min-width: 100px;
    text-align: left;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;

    & span {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

// Element: ColumnFour
export const ColumnFour = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-grid-column: 4;
  grid-column: 4;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: auto;
  margin-top: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    -ms-grid-column: 3;
    grid-column: 3;
    -ms-grid-row: 2;
    grid-row: 2;
    & span {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

// Element: Heading
export const Heading = styled.div`
  background: #2a2a2e;
  width: 100%;

  & i {
    color: #ebebeb;
  }

  & h2 {
    color: #ebebeb;
  }
`;

export const PTWrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;
