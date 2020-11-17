// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Render, Section } from "./Media.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../components";

// SubPage: Media
export default function Media() {
  return (
    <Container>
      <Section>
        <Heading>
          <HeadingPrimary icon="fas fa-camera" text="Media" padding="0.6rem" />
        </Heading>

        <ReportContainer>
          <Render>
            <FieldData field="This page is currently under construction..." />
          </Render>
        </ReportContainer>
      </Section>
    </Container>
  );
}
