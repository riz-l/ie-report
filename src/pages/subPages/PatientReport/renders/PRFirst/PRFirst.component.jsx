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
} from "./PRFirst.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRFirst
export default function PRFirst() {
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

  //#region sectionRender = Incident Information Report
  const sectionRender = sectionData.map((patient) => (
    <React.Fragment key={patient.id}>
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
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Incident Number"
                  data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
                />
                <FieldData
                  field="Call Sign"
                  data={patient.ePR_User ? patient.ePR_User : "Not recorded"}
                />
                <FieldData
                  field="Call Data"
                  data={patient.CAD_Date ? patient.CAD_Date : "Not recorded"}
                />
                <FieldData
                  field="Dispatch Complaint"
                  data={
                    patient.CAD_Complaint
                      ? patient.CAD_Complaint
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Crew"
                  data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
                />
                <FieldData
                  field="Location of Incident"
                  data={
                    patient.CAD_LocAdd1 ||
                    patient.CAD_LocAdd2 ||
                    patient.CAD_LocCity ||
                    patient.CAD_LocPCode ? (
                      <>
                        {patient.CAD_LocAdd1}
                        <br />
                        {patient.CAD_LocAdd2}
                        <br />
                        {patient.CAD_LocCity}
                        <br />
                        {patient.CAD_LocPCode}
                      </>
                    ) : (
                      "Not recorded"
                    )
                  }
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Received"
                  data={
                    patient.CAD_IncidentDate
                      ? patient.CAD_IncidentDate
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Mobile"
                  data={
                    patient.CAD_Enroute ? patient.CAD_Enroute : "Not recorded"
                  }
                />
                <FieldData
                  field="On Scene"
                  data={
                    patient.CAD_ArriveScene
                      ? patient.CAD_ArriveScene
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="At Patient"
                  data={
                    patient.CAD_ArrivePatient
                      ? patient.CAD_ArrivePatient
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Left Scene"
                  data={
                    patient.CAD_DepartScene
                      ? patient.CAD_DepartScene
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Arrived Destination"
                  data={
                    patient.CAD_ArriveDest
                      ? patient.CAD_ArriveDest
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
  //#endregion /sectionRender = Incident Information Report

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
