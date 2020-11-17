// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./HeadingPrimary.elements";

// Import: Components
import { Icon } from "../index";

// Component: HeadingPrimary
export default function HeadingPrimary({
  icon,
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
        <Icon icon={icon} />
        <h2>{text}</h2>
      </Wrapper>
    </Container>
  );
}
