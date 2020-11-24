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
} from "./PRTrauma.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRTrauma
export default function PRTrauma() {
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

  //#region sectionRender = Trauma Management report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Trauma Management"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {/* #TODO - Skeletal Trauma */}

            <HeadingSecondary text="Burns" marginBottom="0" />
            <FieldData
              field="Total &#37;"
              data="Test Data"
              marginBottom="2rem"
            />

            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Head" marginBottom="0" />

                <FieldData field="Thickness" data="Test Data" />
                <FieldData field="&#37; Area" data="Test Data" />
                <FieldData field="Time Dressing Applied" data="Test Data" />
                <FieldData field="Time Cooling Applied" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Torso" marginBottom="0" />

                <FieldData field="Thickness" data="Test Data" />
                <FieldData field="&#37; Area" data="Test Data" />
                <FieldData field="Time Dressing Applied" data="Test Data" />
                <FieldData field="Time Cooling Applied" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary text="Limbs" marginBottom="0" />

                <FieldData field="Thickness" data="Test Data" />
                <FieldData field="&#37; Area" data="Test Data" />
                <FieldData field="Time Dressing Applied" data="Test Data" />
                <FieldData field="Time Cooling Applied" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Trauma Management report

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
