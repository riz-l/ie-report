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
} from "./DODDiagnosis.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODDiagnosis
export default function DODDiagnosis({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Diagnosis of Death Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Diagnosis of Death Timed At"
                  data={patient.DoD_Time ? patient.DoD_Time : "Not recorded"}
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Privacy"
                  data={patient.Privacy ? patient.Privacy : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Diagnosis of Death Confirmed By"
                  data={patient.Confirmed ? patient.Confirmed : "Not recorded"}
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Diagnosis of Death Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Diagnosis of Death"
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
          text="Diagnosis of Death"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Diagnosis of Death data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
