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
} from "./PRCardiovascular.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRCardiovascular
export default function PRCardiovascular() {
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

  //#region sectionRender = Cardiovascular Assessment report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Cardiovascular Assessment"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {/* #TODO - Cardiac Assessment */}

            <HeadingSecondary text="Stroke Assessment" />

            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Condition" marginBottom="0" />
                <FieldData field="Suspected Stroke" data="Test Data" />
                <FieldData field="Suspected TIA" data="Test Data" />
                <FieldData field="BM Recorded" data="Test Data" />
                <FieldData field="Referred to Hyper-Accute" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="FAST Assessment" marginBottom="0" />
                <FieldData field="FAST Assessment Outcome" data="Test Data" />

                <Grid>
                  <ColumnOne>
                    <FieldData field="Face" data="Test Data" />
                  </ColumnOne>

                  <ColumnTwo>
                    <FieldData field="Side (Face)" data="Test Data" />
                  </ColumnTwo>
                </Grid>

                <Grid>
                  <ColumnOne>
                    <FieldData field="Arms" data="Test Data" />
                  </ColumnOne>

                  <ColumnTwo>
                    <FieldData field="Side (Arms)" data="Test Data" />
                  </ColumnTwo>
                </Grid>
                <FieldData field="Speech" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Witnessed Onset" data="Test Data" />
                <FieldData field="Last time seen well" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Cardiovascular Assessment report

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
