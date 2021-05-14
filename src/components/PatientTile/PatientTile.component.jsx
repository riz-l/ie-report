// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as PatientIcon } from "../../assets/img/icons/patient.svg";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  ColumnFour,
  Container,
  Grid,
  Heading,
  PatientHeading,
  NameContainer,
  Render,
  Section,
  PatientIconcontainer,
  PTWrapper,
  Wrapper,
} from "./PatientTile.elements";

// Import: Components
import { FieldData, HeadingPrimary, Loader, ReportContainer } from "../index";

// Component: PatientTile
export default function PatientTile({
  selectedPatient,
  isLoading,
  patientDetailsData,
}) {
  //#region patientRender = Patient Demographics
  const patientRender = patientDetailsData.map((patient) => (
    <Section key={patient.id}>
      <PTWrapper>
        <Heading>
          <HeadingPrimary
            icon="fas fa-hospital-user"
            text="Patient Demographics"
            padding="0.6rem"
          />
        </Heading>
        <Render>
          <Grid>
            <ColumnOne>
              <Wrapper>
                <NameContainer>
                  <PatientIconcontainer>
                    <PatientIcon />
                  </PatientIconcontainer>
                  <PatientHeading>
                    <h2>
                      {patient.PD_Firstname
                        ? patient.PD_Firstname
                        : "Firstname"}
                    </h2>
                    <h2>
                      {patient.PD_Surname ? patient.PD_Surname : "Surname"}
                    </h2>
                  </PatientHeading>
                </NameContainer>
              </Wrapper>
            </ColumnOne>

            <ColumnTwo>
              <Wrapper>
                <FieldData
                  field="Date of Birth"
                  data={patient.PD_DOB ? patient.PD_DOB : "Not Recorded"}
                />
                <FieldData
                  field="Age (Years)"
                  data={
                    patient.PD_Age_Yrs ? patient.PD_Age_Yrs : "Not Recorded"
                  }
                />
                <FieldData
                  field="Age (Months)"
                  data={
                    patient.PD_Age_Mths ? patient.PD_Age_Mths : "Not Recorded"
                  }
                />
                <FieldData
                  field="Gender"
                  data={patient.PD_Gender ? patient.PD_Gender : "Not Recorded"}
                />
              </Wrapper>
            </ColumnTwo>

            <ColumnThree>
              <Wrapper>
                <FieldData
                  field="Ethnicity"
                  data={
                    patient.PD_Ethnicity ? patient.PD_Ethnicity : "Not Recorded"
                  }
                />
                <FieldData
                  field="Weight (kg)"
                  data={patient.PD_Weight ? patient.PD_Weight : "Not Recorded"}
                />
                <FieldData
                  field="NHS No."
                  data={patient.PD_Nhs_No ? patient.PD_Nhs_No : "Not Recorded"}
                />
              </Wrapper>
            </ColumnThree>

            <ColumnFour>
              <Wrapper>
                <FieldData
                  field="Telephone"
                  data={
                    patient.PD_Telephone ? patient.PD_Telephone : "Not Recorded"
                  }
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
              </Wrapper>
            </ColumnFour>
          </Grid>
        </Render>
      </PTWrapper>
    </Section>
  ));
  //#endregion /patientRender = Patient Demographics

  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Section>
          <ReportContainer>
            <Render>
              <Loader background="#FFFFFF" />
            </Render>
          </ReportContainer>
        </Section>
      </Container>
    );
  }

  return <Container>{patientRender}</Container>;
}
