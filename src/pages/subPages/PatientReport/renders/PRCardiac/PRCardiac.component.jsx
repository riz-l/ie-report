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
} from "./PRCardiac.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRCardiac
export default function PRCardiac({
  isLoading,
  selectedPatient,
  cardiacArrestData,
}) {
  //#region sectionRender = Incident Information Report
  const sectionRender = cardiacArrestData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Resus Attempted"
            data={
              patient.Resus_Attempted ? patient.Resus_Attempted : "Not recorded"
            }
          />
          <FieldData
            field="Bystander CPR"
            data={
              patient.Bystander_CPR ? patient.Bystander_CPR : "Not recorded"
            }
          />
          <FieldData
            field="Time Compressions Started"
            data={
              patient.Time_Compression_Started
                ? patient.Time_Compression_Started
                : "Not recorded"
            }
          />
          <FieldData
            field="Public AED"
            data={patient.Public_AED ? patient.Public_AED : "Not recorded"}
          />
          <FieldData
            field="Time of First Public AED Shock"
            data={
              patient.Time_of_First_Shock
                ? patient.Time_of_First_Shock
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="First Monitored Rhythm"
            data={
              patient.First_Monitored_Rhythm
                ? patient.First_Monitored_Rhythm
                : "Not recorded"
            }
          />
          <FieldData
            field="NWAS Shocks"
            data={patient.NWAS_Shocked ? patient.NWAS_Shocked : "Not recorded"}
          />
          <FieldData
            field="Time of First NWAS Shock"
            data={
              patient.Time_of_First_NWAS_Shock
                ? patient.Time_of_First_NWAS_Shock
                : "Not recorded"
            }
          />
          <FieldData
            field="ROSC Present at Handover"
            data={
              patient.ROSC_Present_at_Handover
                ? patient.ROSC_Present_at_Handover
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="Time of First ROSC"
            data={patient.Time_of_ROSC ? patient.Time_of_ROSC : "Not recorded"}
          />
          <FieldData
            field="Time of Subsequent ROSCs"
            data={
              patient.Time_of_sub_ROSC
                ? patient.Time_of_sub_ROSC
                : "Not recorded"
            }
          />
          <FieldData
            field="Termination of Resus"
            data={
              patient.Termination_of_Resus
                ? patient.Termination_of_Resus
                : "Not recorded"
            }
          />
          <FieldData
            field="Total No. of Shocks"
            data={patient.No_of_Shocks ? patient.No_of_Shocks : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Cardiac Arrest Report
  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Cardiac Arrest"
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
          text="Cardiac Arrest"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {cardiacArrestData && cardiacArrestData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Cardiac Arrest data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
