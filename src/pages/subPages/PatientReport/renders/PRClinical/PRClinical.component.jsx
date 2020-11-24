// Import: Dependencies
import React, { useState, useEffect } from "react";
import { cadDetails } from "../../../../../utils/axios";

// Import: Elements
import {
  Heading,
  Render,
  Section,
  Table,
  TableColumn,
} from "./PRClinical.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRClinical
export default function PRClinical() {
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

  //#region sectionRender = Clinical Observations report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Clinical Observations"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Table>
              <TableColumn>
                <FieldData
                  field="Time"
                  data="Time Data"
                  paddingBottom="2px"
                  fontSize="0.71rem"
                  fieldFontWeight="700"
                  fieldMinHeight="45px"
                  fieldTextTransform="uppercase"
                />
              </TableColumn>

              <TableColumn>
                <FieldData
                  field="Time"
                  data="Time Data"
                  paddingBottom="2px"
                  fontSize="0.71rem"
                  fieldFontWeight="700"
                  fieldMinHeight="45px"
                  fieldTextTransform="uppercase"
                />
              </TableColumn>
            </Table>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Clinical Observations report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Clinical Observations"
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
              text="Clinical Observations"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Clinical Observations data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
