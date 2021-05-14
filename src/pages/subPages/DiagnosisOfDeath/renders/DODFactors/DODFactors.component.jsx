// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  Grid,
  Heading,
  Render,
  Section,
} from "./DODFactors.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODFactors
export default function DODFactors({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Factors to Confirm... Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="&#62; 15 minutes since the onset of collapse"
                  data={patient.DoD_Onset ? patient.DoD_Onset : "Not recorded"}
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Asystole for &#62; 30 seconds on the ECG monitor"
                  data={patient.DoD_ECG ? patient.DoD_ECG : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="No effective CPR prior to arrival of ambulance"
                  data={patient.DoD_CPR ? patient.DoD_CPR : "Not recorded"}
                />
              </ColumnThree>
            </Grid>

            <HeadingTertiary text="All of the above MUST be confirmed" />
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Factors to Confirm... Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Loader background="#3a3a40" />
          </Render>
        </ReportContainer>
      </Section>
    );
  }
  return (
    <Section>
      <Heading>
        <HeadingPrimary
          icon="fas fa-file-medical-alt"
          text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Factors to Confirm data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
