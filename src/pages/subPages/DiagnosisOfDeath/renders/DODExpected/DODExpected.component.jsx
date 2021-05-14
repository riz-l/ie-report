// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  Grid,
  Heading,
  Render,
  Section,
} from "./DODExpected.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODExpected
export default function DODExpected({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Expected Death... Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Expected Death due to a terminal illness"
                  data={
                    patient.DoD_Terminal ? patient.DoD_Terminal : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Explanation"
                  data={
                    patient.Terminal_Illness
                      ? patient.Terminal_Illness
                      : "Not recorded"
                  }
                />
              </ColumnTwo>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Expected Death... Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="E. Expected Death Due to Illness or Pre-Existing Condition"
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
          text="E. Expected Death Due to Illness or Pre-Existing Condition"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Expected Death data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
