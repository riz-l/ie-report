// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
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
  ReportContainer,
} from "../../../components";

// SubPage: Notes
export default function Notes() {
  return (
    <Container>
      {/* Presenting Complaint */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Presenting Complaint"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* History of Presenting Complaint */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="History of Presenting Complaint"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Previous Medical History */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Previous Medical History"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Social History */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Social History"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* On Examination */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="On Examination"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Plan / Treatment */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Plan / Treatment"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Additional Information */}
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
                <FieldData data="Test Data" />
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </Container>
  );
}
