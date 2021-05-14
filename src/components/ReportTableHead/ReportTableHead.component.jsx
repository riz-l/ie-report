// Import: Dependencies
import React from "react";

// Import: Elements
import { THead } from "./ReportTableHead.elements.js";

// Component: TableHead
export default function ReportTableHead({
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
    <THead
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
    </THead>
  );
}
