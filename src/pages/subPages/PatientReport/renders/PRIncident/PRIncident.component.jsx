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
} from "./PRIncident.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRIncident
export default function PRIncident({
  selectedPatient,
  cadDetailsData,
  isLoading,
}) {
  //#region sectionRender = Incident Information Report
  const sectionRender = cadDetailsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Incident Number"
                  data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
                />
                <FieldData
                  field="Call Sign"
                  data={patient.ePR_User ? patient.ePR_User : "Not recorded"}
                />
                <FieldData
                  field="Call Data"
                  data={patient.CAD_Date ? patient.CAD_Date : "Not recorded"}
                />
                <FieldData
                  field="Dispatch Complaint"
                  data={
                    patient.CAD_Complaint
                      ? patient.CAD_Complaint
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Crew"
                  data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
                />
                <FieldData
                  field="Location of Incident"
                  data={
                    patient.CAD_LocAdd1 ||
                    patient.CAD_LocAdd2 ||
                    patient.CAD_LocCity ||
                    patient.CAD_LocPCode ? (
                      <>
                        {patient.CAD_LocAdd1}
                        <br />
                        {patient.CAD_LocAdd2}
                        <br />
                        {patient.CAD_LocCity}
                        <br />
                        {patient.CAD_LocPCode}
                      </>
                    ) : (
                      "Not recorded"
                    )
                  }
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Received"
                  data={
                    patient.CAD_IncidentDate
                      ? patient.CAD_IncidentDate
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Mobile"
                  data={
                    patient.CAD_Enroute ? patient.CAD_Enroute : "Not recorded"
                  }
                />
                <FieldData
                  field="On Scene"
                  data={
                    patient.CAD_ArriveScene
                      ? patient.CAD_ArriveScene
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="At Patient"
                  data={
                    patient.CAD_ArrivePatient
                      ? patient.CAD_ArrivePatient
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Left Scene"
                  data={
                    patient.CAD_DepartScene
                      ? patient.CAD_DepartScene
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Arrived Destination"
                  data={
                    patient.CAD_ArriveDest
                      ? patient.CAD_ArriveDest
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
  //#endregion /sectionRender = Incident Information Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Incident Information"
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
  console.log("CAD data: ", cadDetailsData);
  return (
    <Section>
      <Heading>
        <HeadingPrimary
          icon="fas fa-file-medical-alt"
          text="Incident Information"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {cadDetailsData && cadDetailsData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Incident Information data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
