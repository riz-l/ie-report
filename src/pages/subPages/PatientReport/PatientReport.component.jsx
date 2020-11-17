// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Section } from "./PatientReport.elements";

// Import: Components
import {
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
} from "../../../components";

// SubPage: PatientReport
export default function PatientReport() {
  return (
    <Container>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="This is a Heading Primary"
            padding="0.6rem"
          />
        </Heading>
        <HeadingSecondary text="This is a Heading Secondary" />
        <HeadingTertiary text="This is a Heading Tertiary" />
      </Section>

      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="This is a Heading Primary"
            padding="0.6rem"
          />
        </Heading>
        <HeadingSecondary text="This is a Heading Secondary" />
        <HeadingTertiary text="This is a Heading Tertiary" />
      </Section>
    </Container>
  );
}
