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
} from "./PRAirways.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRAirways
export default function PRAirways({
  selectedPatient,
  airwaysManagementData,
  isLoading,
}) {
  const sectionRender = airwaysManagementData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <HeadingTertiary text="Big Valve Mask" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.BVM ? patient.BVM : "Not recorded"}
          />

          <HeadingTertiary text="Nasopharyngeal Airway" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.NPA_Size ? patient.NPA_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.NPA_By ? patient.NPA_By : "Not recorded"}
          />

          <HeadingTertiary text="Oropharyngeal Airway" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.OPA_Size ? patient.OPA_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.OPA_By ? patient.OPA_By : "Not recorded"}
          />
        </ColumnOne>

        <ColumnTwo>
          <HeadingTertiary text="Supraglottic Airway" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.LMA_Size ? patient.LMA_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.LMA_By ? patient.LMA_By : "Not recorded"}
          />

          <HeadingTertiary text="Endotracheal" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.ET_Size ? patient.ET_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.ET_By ? patient.ET_By : "Not recorded"}
          />
          <FieldData
            field="Grade of View"
            data={patient.GradeOfView ? patient.GradeOfView : "Not recorded"}
          />
        </ColumnTwo>

        <ColumnThree>
          <HeadingTertiary text="Surgical Cric" marginBottom="0" />
          <FieldData
            data={
              patient.SurgicalCric
                ? patient.SurgicalCric === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
          />
          <FieldData
            field="By"
            data={
              patient.SurgicalCric_By ? patient.SurgicalCric_By : "Not recorded"
            }
          />

          <HeadingTertiary text="Suction" marginBottom="0" />
          <FieldData
            data={
              patient.Suction
                ? patient.Suction === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
          />
          <FieldData
            field="By"
            data={patient.Suction_By ? patient.Suction_By : "Not recorded"}
          />

          <HeadingTertiary text="Thoracostomy" marginBottom="0" />
          <FieldData
            data={
              patient.Thoracostomy
                ? patient.Thoracostomy === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
          />
          <FieldData
            field="By"
            data={
              patient.Thoracostomy_By ? patient.Thoracostomy_By : "Not recorded"
            }
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Airways Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Airways Management"
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
          text="Airways Management"
          padding="0.6rem"
        />
      </Heading>
      <ReportContainer>
        <Render>
          {airwaysManagementData && airwaysManagementData.length > 0 ? (
            sectionRender
          ) : (
            <FieldData data="There is no Airways Management data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
