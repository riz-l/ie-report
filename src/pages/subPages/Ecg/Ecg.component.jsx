// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Render, Section } from "./Ecg.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../components";

// SubPage: Ecg
export default function Ecg() {
  return (
    <Container>
      <Section>
        <Heading>
          <HeadingPrimary icon="fas fa-heartbeat" text="ECG" padding="0.6rem" />
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
