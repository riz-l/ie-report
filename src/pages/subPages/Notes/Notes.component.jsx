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
} from "./Notes.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  ReportContainer,
} from "../../../components";

// SubPage: Notes
export default function Notes() {
  return (
    <Container>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Additional Information"
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
