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
} from "./PRTriage.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRTriage
export default function PRTriage() {
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

  //#region sectionRender = Triage and Pathfinder Support report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Triage and Pathfinder Support"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <HeadingSecondary text="Specialist Pathways Assessment" />

            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="Test Data" />
                <FieldData field="Patient refused pathway" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Specialist Pathway" data="Test Data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern?"
                  data="Test Data"
                />
              </ColumnTwo>
            </Grid>

            <HeadingSecondary text="Major Trauma" marginTop="2rem" />

            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="Test Data" />
                <FieldData field="Patient refused pathway" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Major Trauma Pathfinder" data="Test Data" />
                <FieldData field="Descriminator" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Outcome" data="Test Data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern?"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            <HeadingSecondary
              text="Manchester Triage System"
              marginTop="2rem"
            />

            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="Test Data" />
                <FieldData field="Not Qualified To" data="Test Data" />
                <FieldData field="Patient refused pathway" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="MTS Card" data="Test Data" />
                <FieldData field="MTS Descriminator" data="Test Data" />
                <FieldData field="Outcome Colour" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Outcome Code" data="Test Data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            <HeadingSecondary text="Pathfinders" marginTop="2rem" />

            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="Test Data" />
                <FieldData field="Patient refused pathway" data="Test Data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Exclusion Reason" data="Test Data" />
                <FieldData field="Medical Pathfinder" data="Test Data" />
                <FieldData field="Pathfinder Discriminator" data="Test Data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Trauma Pathfinder" data="Test Data" />
                <FieldData field="Pathfinder Discriminator" data="Test Data" />
                <FieldData field="Pathfinder Outcome" data="Test Data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern?"
                  data="Test Data"
                />
              </ColumnThree>
            </Grid>

            {/* #TODO - Joint Decision Making */}
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Triage and Pathfinder Support report

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
