// Import: Dependencies
import React from "react";

// Import: Elements
import { Table } from "./ReportTable.elements.js";

// Component: Table
export default function ReportTable({
  backgroundColor,
  children,
  height,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  width,
}) {
  return (
    <Table
      style={{
        backgroundColor: `${backgroundColor}`,
        height: `${height}`,
        margin: `${margin}`,
        marginTop: `${marginTop}`,
        marginRight: `${marginRight}`,
        marginBottom: `${marginBottom}`,
        marginLeft: `${marginLeft}`,
        padding: `${padding}`,
        paddingTop: `${paddingTop}`,
        paddingRight: `${paddingRight}`,
        paddingBottom: `${paddingBottom}`,
        paddingLeft: `${paddingLeft}`,
        width: `${width}`,
      }}
    >
      {children}
    </Table>
  );
}
