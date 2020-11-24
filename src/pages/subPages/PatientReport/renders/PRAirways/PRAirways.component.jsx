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
} from "./PRAirways.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRAirways
export default function PRAirways() {
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

  //#region sectionRender = Airways Management report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Airways Management"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Big Valve Mask" marginBottom="0" />
                <FieldData field="Size" data="Test Data" />

                <HeadingTertiary
                  text="Nasopharyngeal Airway"
                  marginBottom="0"
                />
                <FieldData field="Size" data="Test Data" />
                <FieldData field="By" data="Test Data" />

                <HeadingTertiary text="Oropharyngeal Airway" marginBottom="0" />
                <FieldData field="Size" data="Test Data" />
                <FieldData field="By" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Supraglottic Airway" marginBottom="0" />
                <FieldData field="Size" data="Test Data" />
                <FieldData field="By" data="Test Data" />

                <HeadingTertiary text="Endotracheal" marginBottom="0" />
                <FieldData field="Size" data="Test Data" />
                <FieldData field="By" data="Test Data" />
                <FieldData field="Grade of View" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary text="Surgical Cric" marginBottom="0" />
                <FieldData data="Surgical Cric" />
                <FieldData field="By" data="Test Data" />

                <HeadingTertiary text="Suction" marginBottom="0" />
                <FieldData data="Suction" />
                <FieldData field="By" data="Test Data" />

                <HeadingTertiary text="Thoracostomy" marginBottom="0" />
                <FieldData data="Thoracostomy" />
                <FieldData field="By" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Airways Management report

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
