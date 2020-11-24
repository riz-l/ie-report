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
} from "./PRSign.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRSign
export default function PRSign() {
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

  //#region sectionRender = Sign and Sync report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Sign and Sync"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {/* Final Impression and Clinical Signatures */}
            <HeadingSecondary
              text="Final Impression and Clinical Signatures"
              marginBottom="0"
            />

            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Final Impression" marginBottom="0" />
                <FieldData field="Final Impression" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary
                  text="Clinical Assessment Completed By"
                  marginBottom="0"
                />
                <FieldData field="Staff Number" data="Test Data" />
                <FieldData field="Registration No." data="Test Data" />
                <FieldData field="Staff Signature" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary
                  text="Senior Clinician's Signature"
                  marginBottom="0"
                />
                <FieldData field="Staff Number" data="Test Data" />
                <FieldData field="Registration No." data="Test Data" />
                <FieldData
                  field="Senior Clinician's Signature"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            {/* Patient Refusal */}
            <HeadingSecondary
              text="Patient Refusal"
              marginBottom="0"
              marginTop="2rem"
            />
            <HeadingTertiary
              text="Refusal Statement/Signature"
              marginBottom="0"
            />
            <FieldData field="All the information and treatment options relating to my conditions/injuries have been explained. I fully understand the risks of refusing treatment or transport as advised by the ambulance clinician and I accept all responsibility for my own care." />

            <HeadingTertiary
              text="Patients / Guardians Name"
              marginBottom="0"
              marginTop="2rem"
            />
            <Grid>
              <ColumnOne>
                <FieldData field="Name" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Patients/Guardian Signature"
                  data="Test Data"
                />
              </ColumnTwo>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Sign and Sync report

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
