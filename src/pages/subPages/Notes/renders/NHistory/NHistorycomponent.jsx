// Import: Dependencies
import React from "react";

// Import: Elements
import { ColumnOne, Grid, Heading, Render, Section } from "./NHistory.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRFirst
export default function NHistory({ isLoading, selectedPatient, notesData }) {
  //#region sectionRender = History of Presenting Complaint Report
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
                      patient.AddtItem_HPC
                        ? patient.AddtItem_HPC
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
  //#endregion /sectionRender = History of Presenting Complaint Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="History of Presenting Complaint"
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
          text="History of Presenting Complaint"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {notesData && notesData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no History of Presenting Complaints data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
