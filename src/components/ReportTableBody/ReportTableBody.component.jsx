// Import: Dependencies
import React from "react";

// Import: Elements
import { TBody } from "./ReportTableBody.elements";

// Component: TableRow
export default function ReportTableBody({
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
    <TBody
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
    </TBody>
  );
}
