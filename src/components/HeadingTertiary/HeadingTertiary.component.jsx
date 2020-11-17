// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./HeadingTertiary.elements";

// Component: HeadingTertiary
export default function HeadingTertiary({
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
        <h4>{text}</h4>
      </Wrapper>
    </Container>
  );
}
