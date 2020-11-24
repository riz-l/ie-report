// Import: Dependencies
import React, { useState, useEffect } from "react";
import { cadDetails } from "../../../../../utils/axios";

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
export default function PRPatient() {
  // State = loading, sectionData
  const [loading, setLoading] = useState(true);
  const [sectionData, setSectionData] = useState([]);

  // Patient Master_ePR_ID
  const patientId = "a6ef1fb3-2482-4ee3-b558-3d084d90247d";

  // Fetch Patient data from OneResponse API
  function getPatientData() {
    setLoading(true);

    cadDetails
      .get(`/${patientId}`, {})
      .then((res) => {
        const data = res.data;
        setSectionData(data);
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

  //#region sectionRender = Patient Details report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Patient Details"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData field="Forename" data="Test Data" />
                <FieldData field="Surname" data="Test Data" />
                <FieldData field="Date of Birth" data="Test Data" />
                <FieldData field="Age (Years)" data="Test Data" />
                <FieldData field="Age (Years)" data="Test Data" />
                <FieldData field="Gender" data="Test Data" />
                <FieldData field="NHS No." data="Test Data" />
                <FieldData field="Ethnicity" data="Test Data" />
                <FieldData field="Weight (kg)" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Telephone" data="Test Data" />
                <FieldData field="Address" data="Test Data" />
                <FieldData field="Patient has allergies?" data="Test Data" />
                <FieldData field="Allergies" data="Test Data" />
                <FieldData
                  field="Patient takes medications?"
                  data="Test Data"
                />
                <FieldData field="Medication" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingSecondary text="Next of Kin" />
                <FieldData field="Forename" data="Test Data" />
                <FieldData field="Surname" data="Test Data" />
                <FieldData field="Relationship to Patient" data="Test Data" />
                <FieldData field="Contact Number" data="Test Data" />
                <HeadingSecondary text="Patient GP" />
                <FieldData field="GP Surgery Name" data="Test Data" />
                <FieldData field="GP Address" data="Test Data" />
                <FieldData field="Other" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Patient Details report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Incident Information"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <Loader background="#3a3a40" />
            </Render>
          </ReportContainer>
        </Section>
      ) : sectionData && sectionData.length > 0 ? (
        sectionRender
      ) : (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Incident Information"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Incident Information data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
