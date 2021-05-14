// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
  Grid,
  Heading,
  Render,
  Section,
} from "./NAdditional.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRFirst
export default function NAdditional({ selectedPatient, isLoading, notesData }) {
  //#region sectionRender = Additional Information Report
  const sectionRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                {isLoading ? (
                  <Loader background="#3a3a40" />
                ) : (
                  <FieldData
                    data={
                      patient.AddtItem_Adds_Info
                        ? patient.AddtItem_Adds_Info
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Additional Information Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Additional Information"
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
          text="Additional Information"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {notesData && notesData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Additional Information data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
