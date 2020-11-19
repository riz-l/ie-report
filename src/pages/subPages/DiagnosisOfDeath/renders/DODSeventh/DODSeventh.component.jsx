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
} from "./DODSeventh.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: DODSeventh
export default function DODSeventh() {
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

  //#region sectionRender = Attendance and Relatives Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      {/* Attendance and Relatives */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Attendance and Relatives"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Police Attendance"
                  data={patient.Police ? patient.Police : "Not recorded"}
                />
                <FieldData
                  field="Details of Police involvement"
                  data={
                    patient.Terminal_Additional
                      ? patient.Terminal_Additional
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="GP Attendance"
                  data={patient.GP ? patient.GP : "Not recorded"}
                />
                <FieldData
                  field="Relatives Attendance"
                  data={patient.Relative ? patient.Relative : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Bereavement Leaflet provided and consider religious support"
                  data={
                    patient.DoD_Leaflet ? patient.DoD_Leaflet : "Not recorded"
                  }
                />
                <FieldData
                  field="Did the Patient have a known learning disability? If yes, inform support centre"
                  data={
                    patient.DoD_Disability
                      ? patient.DoD_Disability
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
  //#endregion /sectionRender = Attendance and Relatives Report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Attendance and Relatives"
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
              text="Attendance and Relatives"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Attendance and Relatives data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}