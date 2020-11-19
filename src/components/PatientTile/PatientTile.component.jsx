// Import: Dependencies
import React, { useState, useEffect } from "react";
import { patientDetails } from "../../utils/axios";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  Container,
  Grid,
  Heading,
  HorizontalRule,
  PatientHeading,
  Render,
  Section,
} from "./PatientTile.elements";

// Import: Components
import { FieldData, HeadingPrimary, Loader, ReportContainer } from "../index";

// Component: PatientTile
export default function PatientTile() {
  // State = patientData, loading
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Patient Master_ePR_ID
  const patientId = "d24fdd2c-021f-4329-9449-34cea4ee3503";

  // Fetch Patient Data
  function getPatientData() {
    setLoading(true);

    patientDetails
      .get(`/${patientId}`, {})
      .then((res) => {
        const data = res.data;
        console.log("Patient Data: ", data);
        setPatientData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  // Run getPatientData on load
  useEffect(() => {
    getPatientData();
  }, []);

  //#region patientRender = Patient Demographics
  const patientRender = patientData.map((patient) => (
    <Section key={patient.id}>
      <Heading>
        <HeadingPrimary
          icon="fas fa-hospital-user"
          text="Patient Demographics"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        {loading ? (
          <Render>
            <Grid>
              <ColumnTwo>
                <Loader background="#ebebeb" />
              </ColumnTwo>
            </Grid>
          </Render>
        ) : (
          <Render>
            <PatientHeading>
              <h2>
                {patient.PD_Firstname ? patient.PD_Firstname : "Firstname"}
              </h2>
              <h2>{patient.PD_Surname ? patient.PD_Surname : "Surname"}</h2>
            </PatientHeading>

            <HorizontalRule />

            <Grid>
              <ColumnOne>
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
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Gender"
                  data={patient.PD_Gender ? patient.PD_Gender : "Not Recorded"}
                />
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
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="NHS No."
                  data={patient.PD_Nhs_No ? patient.PD_Nhs_No : "Not Recorded"}
                />
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
              </ColumnThree>
            </Grid>
          </Render>
        )}
      </ReportContainer>
    </Section>
  ));
  //#endregion /patientRender = Patient Demographics

  return <Container>{patientRender}</Container>;
}
