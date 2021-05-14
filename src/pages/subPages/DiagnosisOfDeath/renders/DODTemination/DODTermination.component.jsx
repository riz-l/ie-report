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
} from "./DODTermination.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODTermination
export default function DODTermination({
  isLoading,
  selectedPatient,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Termination of Resuscitation... Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Continuous chest compressions"
                  data={patient.DoD_Chest ? patient.DoD_Chest : "Not recorded"}
                />
                <FieldData
                  field="Circulatory Access (IV or IO)"
                  data={
                    patient.DoD_Circulatory
                      ? patient.DoD_Circulatory
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="No palpable pulse"
                  data={patient.DoD_Pulse ? patient.DoD_Pulse : "Not recorded"}
                />
                <FieldData
                  field="20 minutes of Asystole. Printed ECG for &#62; 30 seconds"
                  data={patient.DoD_ALS ? patient.DoD_ALS : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Secured Airway (supraglottic or ET)"
                  data={
                    patient.DoD_Airway ? patient.DoD_Airway : "Not recorded"
                  }
                />
                <FieldData
                  field="Where appropriate, IV/IO admin of at least 4 x 1mg adrenaline and amiodarone"
                  data={patient.DoD_Admin ? patient.DoD_Admin : "Not recorded"}
                />
                <FieldData
                  field="No signs of respiration"
                  data={
                    patient.DoD_Respiration
                      ? patient.DoD_Respiration
                      : "Not recorded"
                  }
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Termination of Resuscitation... Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
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
          text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Termination data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
