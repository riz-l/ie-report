// Import: Dependencies
import React from "react";

// Import: Elements
import { THeading } from "./ReportTableHeading.elements.js";

// Component: TableHead
export default function ReportTableHeading({
  backgroundColor,
  children,
  flexBasis,
  flexGrow,
  flexShrink,
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
    <THeading
      style={{
        backgroundColor: `${backgroundColor}`,
        flexBasis: `${flexBasis}`,
        flexShrink: `${flexShrink}`,
        flexGrow: `${flexGrow}`,
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
    </THeading>
  );
}
