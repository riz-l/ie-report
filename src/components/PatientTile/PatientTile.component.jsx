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
  HorizontalRule,
  PatientHeading,
  Render,
  Section,
} from "./PatientTile.elements";

// Import: Components
import { FieldData, HeadingPrimary, ReportContainer } from "../index";

// Component: PatientTile
export default function PatientTile() {
  return (
    <Container>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-hospital-user"
            text="Patient Demographics"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <PatientHeading>
              <h2>Forename</h2>
              <h2>Surname</h2>
            </PatientHeading>

            <HorizontalRule />

            <Grid>
              <ColumnOne>
                <FieldData field="Date of Birth" data="Test Data" />
                <FieldData field="Age (Years)" data="Test Data" />
                <FieldData field="Age (Months)" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Gender" data="Test Data" />
                <FieldData field="Ethnicity" data="Test Data" />
                <FieldData field="Weight (kg)" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="NHS No." data="Test Data" />
                <FieldData field="Telephone" data="Test Data" />
                <FieldData field="Address" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </Container>
  );
}
