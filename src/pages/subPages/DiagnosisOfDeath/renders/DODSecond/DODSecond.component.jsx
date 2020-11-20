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
} from "./DODSecond.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODSecond
export default function DODSecond() {
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

  //#region sectionRender = Factors to Confirm... Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="&#62; 15 minutes since the onset of collapse"
                  data={patient.DoD_Onset ? patient.DoD_Onset : "Not recorded"}
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Asystole for &#62; 30 seconds on the ECG monitor"
                  data={patient.DoD_ECG ? patient.DoD_ECG : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="No effective CPR prior to arrival of ambulance"
                  data={patient.DoD_CPR ? patient.DoD_CPR : "Not recorded"}
                />
              </ColumnThree>
            </Grid>

            <HeadingTertiary text="All of the above MUST be confirmed" />
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Factors to Confirm... Report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
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
              text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Factors to Confirm... data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
