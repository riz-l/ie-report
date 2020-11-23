// Import: Dependencies
import React, { useState, useEffect } from "react";
import { notes } from "../../../../../utils/axios";

// Import: Elements
import { ColumnOne, Grid, Heading, Render, Section } from "./NNinth.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: NNinth
export default function NNinth() {
  // State = loading, sectionData
  const [loading, setLoading] = useState(true);
  const [sectionData, setSectionData] = useState([]);

  // Patient Master_ePR_ID
  const patientId = "a6ef1fb3-2482-4ee3-b558-3d084d90247d";

  // Fetch Patient data from OneResponse API
  function getPatientData() {
    setLoading(true);

    notes
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

  //#region sectionRender = Additional Information Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Additional Information"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                {loading ? (
                  <Loader background="#3a3a40" />
                ) : (
                  <FieldData
                    data={
                      patient.AddtItem_Adds_Info
                        ? patient.AddtItem_Adds_Info
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Additional Information Report

  return (
    <>
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Additional Information"
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
              text="Additional Information"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Additional Information data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}
    </>
  );
}
