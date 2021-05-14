// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Logo, Wrapper } from "./Header.elements";

// Component: Header
export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <span>Integration Report</span>
        </Logo>
      </Wrapper>
    </Container>
  );
}
