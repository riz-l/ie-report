// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  margin: 1rem;
`;

// Element: Section
export const Section = styled.section`
  background: #ffffff;
  margin-bottom: 1rem;
`;

// Element: Render
export const Render = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;
`;

// Element: Heading
export const Heading = styled.div`
  background: #e0e0e0;
  width: 100%;
`;

// Styled: Table
export const Table = styled.div`
  display: -ms-grid;
  display: grid;
  grid-gap: 10px;
  -ms-grid-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
  /* grid-template-columns: repeat(3, 1fr); */
  height: 100%;
  width: 100%;
`;

// Styled: TableColumn
export const TableColumn = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;

  &:nth-child(1) {
    -ms-flex: 1;
    flex: 1;
    display: block;
  }

  &:nth-child(2) {
    -ms-flex: 1;
    flex: 1;
    display: block;
  }
`;
