// Import: Dependencies
import React, { useState, useEffect } from "react";
import { notes } from "../../../utils/axios";

// Import: Elements
import {
  ColumnOne,
  Container,
  Grid,
  Heading,
  Render,
  Section,
} from "./Notes.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../components";

// SubPage: Notes
export default function Notes() {
  // State = notesData, loading
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Patient Master_ePR_ID
  const patientId = "d24fdd2c-021f-4329-9449-34cea4ee3503";

  // Fetch Patient Data
  function getPatientData() {
    setLoading(true);

    notes
      .get(`/${patientId}`, {})
      .then((res) => {
        const data = res.data;
        console.log("Notes Data: ", data);
        setNotesData(data);
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

  //#region notesRender = Notes Report
  const notesRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      {/* Presenting Complaint */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Presenting Complaint"
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
                      patient.AddtItem_PC ? patient.AddtItem_PC : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* History of Presenting Complaint */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="History of Presenting Complaint"
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
                      patient.AddtItem_HPC
                        ? patient.AddtItem_HPC
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Previous Medical History */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Previous Medical History"
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
                      patient.AddtItem_PMH
                        ? patient.AddtItem_PMH
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Social History */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Social History"
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
                      patient.AddtItem_Social_History
                        ? patient.AddtItem_Social_History
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Family History */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Family History"
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
                      patient.AddtItem_Family_History
                        ? patient.AddtItem_Family_History
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* On Examination */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="On Examination"
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
                      patient.AddtItem_On_Examination
                        ? patient.AddtItem_On_Examination
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Impression */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Impression"
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
                      patient.AddtItem_Impr_and_Trmt
                        ? patient.AddtItem_Impr_and_Trmt
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Plan / Treatment */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Plan / Treatment"
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
                      patient.AddtItem_Meds
                        ? patient.AddtItem_Meds
                        : "Not recorded"
                    }
                  />
                )}
              </ColumnOne>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Additional Information */}
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
  //#endregion /notesRender = Notes Report

  return <Container>{notesRender}</Container>;
}
