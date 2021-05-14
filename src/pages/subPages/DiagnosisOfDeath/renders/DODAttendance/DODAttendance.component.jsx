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
} from "./DODattendance.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODAttendance
export default function DODAttendance({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Attendance and Relatives Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Police Attendance"
                  data={patient.Police ? patient.Police : "Not recorded"}
                />
                <FieldData
                  field="Details of Police involvement"
                  data={
                    patient.Terminal_Additional
                      ? patient.Terminal_Additional
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="GP Attendance"
                  data={patient.GP ? patient.GP : "Not recorded"}
                />
                <FieldData
                  field="Relatives Attendance"
                  data={patient.Relative ? patient.Relative : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Bereavement Leaflet provided and consider religious support"
                  data={
                    patient.DoD_Leaflet ? patient.DoD_Leaflet : "Not recorded"
                  }
                />
                <FieldData
                  field="Did the Patient have a known learning disability? If yes, inform support centre"
                  data={
                    patient.DoD_Disability
                      ? patient.DoD_Disability
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
  //#endregion /sectionRender = Attendance and Relatives Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Attendance and Relatives"
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
          text="Attendance and Relatives"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Attendance and Relatives data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
