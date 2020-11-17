// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  Container,
  Grid,
  Heading,
  Render,
  Section,
} from "./DiagnosisOfDeath.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  ReportContainer,
} from "../../../components";

// SubPage: DiagnosisOfDeath
export default function DiagnosisOfDeath() {
  return (
    <Container>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Diagnosis Of Death"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData field="Test Field" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Test Field" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Test Field" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </Container>
  );
}
