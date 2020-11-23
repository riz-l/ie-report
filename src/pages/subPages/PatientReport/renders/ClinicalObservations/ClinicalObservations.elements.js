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
  display: table;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;
`;

// Element: Grid
export const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-gap: 10px;
  /* -ms-grid-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  -ms-grid-columns: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  width: 100%;
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
  background: #e0e0e0;
  width: 100%;
`;

// Element: Table
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

// Element: TableHead
export const TableHead = styled.thead``;

// Element: TableRow
export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background: #eee;
  }
`;

// Element: TableHeading
export const TableHeading = styled.th`
  background: #333;
  color: #ffffff;
  font-weight: bold;

  padding: 6px;
  border: 1px solid #cccccc;
  font-weight: bold;
`;

// Element: TableBody
export const TableBody = styled.tbody``;

// Element: TableData
export const TableData = styled.td`
  padding: 6px;
  border: 1px solid #cccccc;
  font-weight: bold;
`;
