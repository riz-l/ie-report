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

      {/* Conditions Unequivocally Associated */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="D. Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <FieldData field="Condition" data="Test Data" />
          </Render>
        </ReportContainer>
      </Section>

      {/* Expected Death */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="E. Expected Death Due to Illness or Pre-Existing Condition"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Expected Death due to a terminal illness"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Explanation" data="Test Data" />
              </ColumnTwo>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Attendance and Relatives */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Attendance and Relatives"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData field="Police Attendance" data="Test Data" />
                <FieldData
                  field="Details of Police involvement"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="GP Attendance" data="Test Data" />
                <FieldData field="Relatives Attendance" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Bereavement Leaflet provided and consider religious support"
                  data="Test Data"
                />
                <FieldData
                  field="Did the Patient have a known learning disability? If yes, inform support centre"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </Container>
  );
}
