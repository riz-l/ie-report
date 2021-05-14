// Import: Dependencies
import React from "react";

// Import: Elements
import { TWrapper } from "./ReportTableWrapper.elements.js";

// Component: TableWrapper
export default function ReportTableWrapper({
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
    <TWrapper
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
    </TWrapper>
  );
}
