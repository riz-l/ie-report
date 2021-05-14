// Import: Dependencies
import React from "react";

// Import: Elements
import { Heading, Render, Section } from "./DODConditions.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODconditions
export default function DODConditions({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region sectionRender = Conditions Unequivocally Associated... Report
  const sectionRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <ReportContainer>
          <Render>
            <FieldData
              field="Condition"
              data={patient.Condition ? patient.Condition : "Not recorded"}
            />
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Conditions Unequivocally Associated... Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="D. Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing)"
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
          text="D. Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Conditions data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
