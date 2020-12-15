// Import: Dependencies
import React, { useState, useEffect } from "react";
import { diagnosisOfDeath } from "../../../../../utils/axios";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  Grid,
  Heading,
  Render,
  Section,
} from "./DODDiagnosis.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODFirst
export default function DODFirst() {
  // State = loading, sectionData
  const [loading, setLoading] = useState(true);
  const [sectionData, setSectionData] = useState([]);

  // Patient Master_ePR_ID
  const patientId = "282e3dbb-a766-4185-8343-45e4e12d3587";

  // Fetch Patient data from OneResponse API
  function getPatientData() {
    setLoading(true);

    diagnosisOfDeath
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

  //#region sectionRender = Diagnosis of Death Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Diagnosis Of Death"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Diagnosis of Death Timed At"
                  data={patient.DoD_Time ? patient.DoD_Time : "Not recorded"}
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Privacy"
                  data={patient.Privacy ? patient.Privacy : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Diagnosis of Death Confirmed By"
                  data={patient.Confirmed ? patient.Confirmed : "Not recorded"}
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Diagnosis of Death Report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Diagnosis of Death"
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
              text="Diagnosis of Death"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Diagnosis of Death data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
