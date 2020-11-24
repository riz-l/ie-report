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
} from "./PRCommunications.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRCommunications
export default function PRCommunications() {
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

  //#region sectionRender = Communications, Consent and Notifications report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Communications, Consent and Notifications"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Communication" marginBottom="0" />
                <FieldData
                  field="Does the Patient have any communication or information needs (described in notes)"
                  data="Test Data"
                />
                <FieldData
                  field="NWAS improves the quality of care given to Patients through clinical audit, research and Patient feedback.
                        May we contact you after this incident to assist us in improving patient care?"
                  data="Test Data"
                  marginBottom="2rem"
                />

                <HeadingTertiary text="Notification" marginBottom="0" />
                <FieldData field="Vulnerable Adult" data="Test Data" />
                <FieldData field="Vulnerable Child" data="Test Data" />
                <FieldData field="SUDC" data="Test Data" />
                <FieldData field="DOD Form" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Consent" marginBottom="0" />
                <FieldData
                  field="The Patient has demonstrated behaviour that indicates they may not have the 
                capacity to make decisions for themself. YES - Complete Capacity to Consent."
                  data="Test Data"
                />
                <FieldData
                  field="Does the Patient have capacity?"
                  data="Test Data"
                />
                <FieldData
                  field="Consent gained for care detailed on this PRF?"
                  data="Test Data"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="The below section can also be populated using the Patient refusal slide out available in the Notes" />

                <HeadingTertiary text="Refused Assessment" marginBottom="0" />
                <FieldData field="Reason" data="Test Data" />
                <FieldData field="Other" data="Test Data" />

                <HeadingTertiary text="Refused Transport" marginBottom="0" />
                <FieldData field="Reason" data="Test Data" />
                <FieldData field="Other" data="Test Data" />

                <HeadingTertiary
                  text="Refused Intervention/Treatment"
                  marginBottom="0"
                />
                <FieldData field="Reason" data="Test Data" />
                <FieldData field="Other" data="Test Data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Communications, Consent and Notifications report

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
