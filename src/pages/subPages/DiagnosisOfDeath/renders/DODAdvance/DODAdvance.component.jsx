// Import: Dependencies
import React, { useState, useEffect } from "react";
import { diagnosisOfDeath } from "../../../../../utils/axios";

// Import: Elements
import { Heading, Render, Section } from "./DODAdvance.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODThird
export default function DODThird() {
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

  //#region sectionRender = Advance Decisions to Refuse... Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <FieldData
              field="Decision"
              data={patient.Decision ? patient.Decision : "Not recorded"}
            />
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Advance Decisions to Refuse... Report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
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
              text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Advance Decisions to Refuse... data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
