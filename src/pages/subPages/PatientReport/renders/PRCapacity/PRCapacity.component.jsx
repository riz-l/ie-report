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
} from "./PRCapacity.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRCapacity
export default function PRCapacity() {
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

  //#region sectionRender = Capacity to Consent report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Capacity to Consent"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {/* Mental Capacity Act */}
            <HeadingSecondary text="Mental Capacity Act" marginBottom="0" />
            <HeadingTertiary text="Does the Mental Capacity Act 2005 apply?" />

            <Grid>
              <ColumnOne>
                <FieldData
                  field="Is the Patient over 16 years of age?"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Is there reason to doubt the Patients capacity?"
                  data="Test Data"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Is there a physical illness/injury that requires treatment?"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            {/* Patient Decisions */}
            <HeadingSecondary
              text="Patient Decisions"
              marginBottom="0"
              marginTop="2rem"
            />

            <Grid>
              <ColumnOne>
                <FieldData
                  field="Describe the decisions you're asking the Patient to make:"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Describe how the Patient has a disturbance of the mind, including a potential lack of capacity:"
                  data="Test Data"
                />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary
                  text="Please identify why the Patient is unable to make a decision:"
                  marginBottom="0"
                />
                <FieldData
                  field="Unable to understand information"
                  data="Test Data"
                />
                <FieldData
                  field="Unable to retain information"
                  data="Test Data"
                />
                <FieldData
                  field="Unable to use information to form a decision"
                  data="Test Data"
                />
                <FieldData
                  field="Unable to communicate their decision"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            {/* Patient Capacity */}
            <HeadingSecondary
              text="Patient Capacity"
              marginBottom="0"
              marginTop="2rem"
            />

            <Grid>
              <ColumnOne>
                <FieldData
                  field="Describe the actions you have taken to assist the Patient in making their own decisions and gain capacity:"
                  data="Test Data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Despite the actions taken previously, I believe that the Patient still lacks capacity because:"
                  data="Test Data"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Is the desired treatment/assessment time critical and would delay cause immediate harm to the Patient:"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            {/* Best Interest Option */}
            <HeadingSecondary
              text="Best Interest Option"
              marginBottom="0"
              marginTop="2rem"
            />
            <HeadingTertiary text="Best interest decision options (consider all options of care, giving consideration to expressed wishes of Patients and family" />

            <Grid>
              <ColumnOne>
                <FieldData field="Option A" data="Test Data" />
                <FieldData field="Option B" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Option A" data="Test Data" />
                <FieldData field="Option B" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="I believe this option is the least restrictive and offers the Patient the appropriate care, which is proportionate to their condition and is in their best interests:"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Capacity to Consent report

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
