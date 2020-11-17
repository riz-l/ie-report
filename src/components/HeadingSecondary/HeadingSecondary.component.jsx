// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./HeadingSecondary.elements";

// Component: HeadingSecondary
export default function HeadingSecondary({
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
  text,
}) {
  return (
    <Container
      style={{
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
      }}
    >
      <Wrapper>
        <h3>{text}</h3>
      </Wrapper>
    </Container>
  );
}
