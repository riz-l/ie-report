// Import: Dependencies
import React from "react";

// Import: Elements
import { Heading, Render, Section } from "./DODAdvance.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODAdvance
export default function DODAdvance({
  isLoading,
  selectedPatient,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Advance Decisions to Refuse... Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <FieldData
              field="Decision"
              data={patient.Decision ? patient.Decision : "Not recorded"}
            />
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Advance Decisions to Refuse... Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
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
          text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Advance Decisions data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
