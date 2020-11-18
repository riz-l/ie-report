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
      {/* Diagnosis of Death */}
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
                <FieldData
                  field="Diagnosis of Death Timed At"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Privacy" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Diagnosis of Death Confirmed By"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Factors to Confirm */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="&#62; 15 minutes since the onset of collapse"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Asystole for &#62; 30 seconds on the ECG monitor"
                  data="Test Data"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="No effective CPR prior to arrival of ambulance"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            <HeadingTertiary text="All of the above MUST be confirmed" />
          </Render>
        </ReportContainer>
      </Section>

      {/* Advance Decisions to Refuse */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <FieldData field="Decision" data="Test Data" />
          </Render>
        </ReportContainer>
      </Section>

      {/* Termination of Resuscitation */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Continuous chest compressions"
                  data="Test Data"
                />
                <FieldData
                  field="Circulatory Access (IV or IO)"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="No palpable pulse" data="Test Data" />
                <FieldData
                  field="20 minutes of Asystole. Printed ECG for &#62; 30 seconds"
                  data="Test Data"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Secured Airway (supraglottic or ET)"
                  data="Test Data"
                />
                <FieldData
                  field="Where appropriate, IV/IO admin of at least 4 x 1mg adrenaline and amiodarone"
                  data="Test Data"
                />
                <FieldData field="No signs of respiration" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </Container>
  );
}
