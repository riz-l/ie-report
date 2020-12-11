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
} from "./DODTermination.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODFourth
export default function DODFourth() {
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

  //#region sectionRender = Termination of Resuscitation... Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Continuous chest compressions"
                  data={patient.DoD_Chest ? patient.DoD_Chest : "Not recorded"}
                />
                <FieldData
                  field="Circulatory Access (IV or IO)"
                  data={
                    patient.DoD_Circulatory
                      ? patient.DoD_Circulatory
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="No palpable pulse"
                  data={patient.DoD_Pulse ? patient.DoD_Pulse : "Not recorded"}
                />
                <FieldData
                  field="20 minutes of Asystole. Printed ECG for &#62; 30 seconds"
                  data={patient.DoD_ALS ? patient.DoD_ALS : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Secured Airway (supraglottic or ET)"
                  data={
                    patient.DoD_Airway ? patient.DoD_Airway : "Not recorded"
                  }
                />
                <FieldData
                  field="Where appropriate, IV/IO admin of at least 4 x 1mg adrenaline and amiodarone"
                  data={patient.DoD_Admin ? patient.DoD_Admin : "Not recorded"}
                />
                <FieldData
                  field="No signs of respiration"
                  data={
                    patient.DoD_Respiration
                      ? patient.DoD_Respiration
                      : "Not recorded"
                  }
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Termination of Resuscitation... Report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
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
              text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Termination of Resuscitation... data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
