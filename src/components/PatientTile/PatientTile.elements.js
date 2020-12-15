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
  -ms-grid-columns: .7fr 1fr 1fr 1fr;
  grid-template-columns: .7fr 1fr 1fr 1fr;
  height: 100%;
  width: 100%;

  & span {
    color: #e0e0e0;
  }
`;

// Element: NameContainer
export const NameContainer = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display:flex;
  flex-direction: column;
  height: 90%;
  -webkit-box-pack:  center;
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
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;

  & svg {
  height: 65px;
  fill:#FFFFFF;
  width: 65px;
} 
`


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
  -ms-grid-column: 1;
  grid-column: 1;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: auto;
  margin-top: auto;
  text-align:left;
  width: 100%;
`;

// Element: ColumnTwo
export const ColumnTwo = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-grid-column: 2;
  grid-column: 2;
  height: 90%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-between;
  margin-bottom: auto;
  margin-top: auto;
  padding-left:30px;
  text-align: left;
  width: 100%;

  & span {
   text-align: center;
   width:100%;
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
  height: 90%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-between;
  margin-bottom: auto;
  margin-top: auto;
  padding-left: 50px;
  text-align: left;
  width: 100%;

  & span {
   text-align: center;
   width:100%;
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
  height: 90%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: auto;
  margin-top: auto;
  padding-bottom: 1rem;
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
