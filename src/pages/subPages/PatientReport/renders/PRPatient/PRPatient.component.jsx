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
} from "./PRPatient.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRPatient
export default function PRPatient({
  selectedPatient,
  patientDetailsData,
  nokData,
  isLoading,
}) {
  // console.log("nok data: ", nokData);
  const nokRender = nokData.map((patient) => (
    <React.Fragment key={patient.id}>
      <HeadingSecondary text="Next of Kin" marginBottom="0" />
      <FieldData
        field="Forename"
        data={patient.NoK_Forename ? patient.NoK_Forename : "Not recorded"}
      />
      <FieldData
        field="Surname"
        data={patient.NoK_Surname ? patient.NoK_Surname : "Not recorded"}
      />
      <FieldData
        field="Relationship to Patient"
        data={patient.NoK_Relation ? patient.NoK_Relation : "Not recorded"}
      />
      <FieldData
        field="Contact Number"
        data={patient.NoK_Contact ? patient.NoK_Contact : "Not recorded"}
      />

      <HeadingSecondary text="Patient GP" marginTop="2rem" marginBottom="0" />
      <FieldData
        field="GP Surgery Name"
        data={patient.GPName ? patient.GPName : "Not recorded"}
      />
      <FieldData
        field="GP Address"
        data={
          patient.GPAddressLine1 ||
          patient.GPAddressLine2 ||
          patient.GPAddressLine3 ||
          patient.GPAddressLine4 ||
          patient.GPPostcode ? (
            <>
              {patient.GPAddressLine1}
              <br />
              {patient.GPAddressLine2}
              <br />
              {patient.GPAddressLine3}
              <br />
              {patient.GPAddressLine4}
              <br />
              {patient.GPPostcode}
            </>
          ) : (
            "Not recorded"
          )
        }
      />
      <FieldData
        field="Other"
        data={patient.GPName_Other ? patient.GPName_Other : "Not recorded"}
      />
    </React.Fragment>
  ));
  // #endregion /nokRender = Next of Kin

  // #region sectionRender = Patient Details Report
  // console.log("PD data: ", patientDetailsData);
  const patientDetailsRender = patientDetailsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Forename"
            data={patient.PD_Firstname ? patient.PD_Firstname : "Not recorded"}
          />
          <FieldData
            field="Surname"
            data={patient.PD_Surname ? patient.PD_Surname : "Not recorded"}
          />
          <FieldData
            field="Date of Birth"
            data={patient.PD_DOB ? patient.PD_DOB : "Not recorded"}
          />
          <FieldData
            field="Age (years)"
            data={patient.PD_Age_Yrs ? patient.PD_Age_Yrs : "Not recorded"}
          />
          <FieldData
            field="Age (months)"
            data={patient.PD_Age_Mths ? patient.PD_Age_Mths : "Not recorded"}
          />
          <FieldData
            field="Gender"
            data={patient.PD_Gender ? patient.PD_Gender : "Not recorded"}
          />
          <FieldData
            field="NHS No."
            data={patient.NHS_No ? patient.NHS_No : "Not recorded"}
          />
          <FieldData
            field="Ethnicity"
            data={patient.PD_Ethnicity ? patient.PD_Ethnicity : "Not recorded"}
          />
          <FieldData
            field="Weight (kg)"
            data={patient.PD_Weight ? patient.PD_Weight : "Not recorded"}
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Telephone"
            data={patient.PD_Telephone ? patient.PD_Telephone : "Not recorded"}
          />
          <FieldData
            field="Address"
            data={
              patient.PD_Housenum ||
              patient.PD_Add1 ||
              patient.PD_Add2 ||
              patient.PD_Add3 ||
              patient.PD_Postcode ? (
                <>
                  {patient.PD_Housenum}
                  <br />
                  {patient.PD_Add1}
                  <br />
                  {patient.PD_Add2}
                  <br />
                  {patient.PD_Add3}
                  <br />
                  {patient.PD_Postcode}
                </>
              ) : (
                "Not recorded"
              )
            }
          />
          <FieldData
            field="Patient has allergies?"
            data={patient.PD_Allergies ? patient.PD_Allergies : "Not recorded"}
          />
          <FieldData
            field="Patient takes medications?"
            data={
              patient.PD_Patient_Meds ? patient.PD_Patient_Meds : "Not recorded"
            }
          />
          <FieldData
            field="Patient takes medications?"
            data={
              patient.PD_Medication ? patient.PD_Medication : "Not recorded"
            }
          />
        </ColumnTwo>

        <ColumnThree>{nokRender}</ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Patient Details Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Patient Details"
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
          text="Patient Details"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {patientDetailsData &&
          patientDetailsData.length > 0 &&
          nokData &&
          nokData.length > 0 ? (
            patientDetailsRender
          ) : (
            <FieldData data="There is no Patient Details data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
