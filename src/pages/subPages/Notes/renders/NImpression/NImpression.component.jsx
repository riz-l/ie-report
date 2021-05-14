// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
  Grid,
  Heading,
  Render,
  Section,
} from "./NImpression.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRFirst
export default function NImpression({ selectedPatient, isLoading, notesData }) {
  //#region sectionRender = Impression Report
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
                      patient.AddtItem_Impr_and_Trmt
                        ? patient.AddtItem_Impr_and_Trmt
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
  //#endregion /sectionRender = Impression Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Impression"
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
          text="Impression"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {notesData && notesData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Impression data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
