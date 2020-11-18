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
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;
`;

// Element: PatientHeading
export const PatientHeading = styled.div`
  & h2 {
    color: #ebebeb;
    font-weight: 400;
    text-transform: uppercase;

    &:nth-child(2) {
      padding-bottom: 1rem;
    }
  }
`;

// Element: HorizontalRule
export const HorizontalRule = styled.hr`
  border: 1px solid #e0e0e0;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

// Element: Grid
export const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-gap: 10px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;

  & span {
    color: #e0e0e0;
  }
`;

// Element: ColumnOne
export const ColumnOne = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-grid-column: 1;
  grid-column: 1;
  height: 100%;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
