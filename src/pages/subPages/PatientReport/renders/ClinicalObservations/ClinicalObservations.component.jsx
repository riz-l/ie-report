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
  Table,
  TableRow,
  TableHeading,
  TableData,
} from "./ClinicalObservations.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: ClinicalObservations
export default function ClinicalObservations() {
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

  //#region sectionRender = Clinical Observations Report
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
              <TableRow>
                <TableHeading>Test 1</TableHeading>
                <TableHeading>Test 2</TableHeading>
                <TableHeading>Test 3</TableHeading>
                <TableHeading>Test 4</TableHeading>
                <TableHeading>Test 5</TableHeading>
                <TableHeading>Test 6</TableHeading>
                <TableHeading>Test 7</TableHeading>
                <TableHeading>Test 8</TableHeading>
                <TableHeading>Test 9</TableHeading>
                <TableHeading>Test 10</TableHeading>
                <TableHeading>Test 11</TableHeading>
                <TableHeading>Test 12</TableHeading>
                <TableHeading>Test 13</TableHeading>
                <TableHeading>Test 14</TableHeading>
                <TableHeading>Test 15</TableHeading>
                <TableHeading>Test 16</TableHeading>
                <TableHeading>Test 17</TableHeading>
              </TableRow>

              <TableRow>
                <TableData>1</TableData>
                <TableData>2</TableData>
                <TableData>3</TableData>
                <TableData>4</TableData>
                <TableData>5</TableData>
                <TableData>6</TableData>
                <TableData>7</TableData>
                <TableData>8</TableData>
                <TableData>9</TableData>
                <TableData>10</TableData>
                <TableData>11</TableData>
                <TableData>12</TableData>
                <TableData>13</TableData>
                <TableData>14</TableData>
                <TableData>15</TableData>
                <TableData>16</TableData>
                <TableData>17</TableData>
              </TableRow>
            </Table>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Clinical Observations Report

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
