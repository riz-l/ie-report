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
} from "./PRTransport.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRPatient
export default function PRTransport({
  selectedPatient,
  isLoading,
  transportOptionsData,
}) {
  //#region TransportRender = Next of Kin
  const transportOptionsRender = transportOptionsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Receiving Location"
            data={
              patient.DestinationName ? patient.DestinationName : "Not recorded"
            }
          />
          <FieldData
            field="Destination Name"
            data={patient.WardName ? patient.WardName : "Not recorded"}
          />
          <FieldData
            field="Other Location"
            data={
              patient.OtherLocation ? patient.OtherLocation : "Not recorded"
            }
          />
          <FieldData
            field="Patient Own Meds Transported"
            data={
              patient.patientOwnMeds
                ? patient.patientOwnMeds === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <HeadingTertiary text="Hospital Pre-Alert" marginBottom="0" />
          <FieldData
            field="Pre-Alert"
            data={patient.Pre_Alert ? patient.Pre_Alert : "Not recorded"}
          />
          <FieldData
            field="Status"
            data={patient.PreAlert_RAG ? patient.PreAlert_RAG : "Not recorded"}
            marginBottom="2rem"
          />

          <HeadingTertiary text="Non-Transport" marginBottom="0" />
          <FieldData
            field="Reason"
            data={
              patient.NonTransportReason
                ? patient.NonTransportReason
                : "Not recorded"
            }
          />
          <FieldData
            field="Other"
            data={patient.Other ? patient.Other : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <HeadingTertiary text="Patients Mobility" marginBottom="0" />
          <FieldData
            field="Scene to Ambulance"
            data={
              patient.Scene_Mobility ? patient.Scene_Mobility : "Not recorded"
            }
          />
          <FieldData
            field="Ambulance to Hospital"
            data={patient.Amb_Mobility ? patient.Amb_Mobility : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /Transport Options Render = Next of Kin

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Transport Options"
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
          text="Transport Options"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {transportOptionsData && transportOptionsData.length > 0 ? (
            transportOptionsRender
          ) : (
            <FieldData data="There is no Airways Management data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
