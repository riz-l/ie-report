// Import: Dependencies
import React from "react";

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
  HeadingTertiary,
  Loader,
  ReportContainer,
  ReportTable,
  ReportTableBody,
  ReportTableData,
  ReportTableHead,
  ReportTableHeading,
  ReportTableRow,
  ReportTableWrapper,
} from "../../../../../components";

// Render: PRTrauma
export default function PRTrauma({
  selectedPatient,
  isLoading,
  burnsData,
  skeletalTraumaData,
}) {
  //#region skeletalTraumaRender = Skeletal Trauma Report
  const skeletalTraumaRender = skeletalTraumaData.map((patient) => (
    <React.Fragment key={patient.id}>
      <ReportTableRow>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ST_Type ? patient.ST_Type : "Not recorded"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ST_Site ? patient.ST_Site : "Not recorded"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ST_Side ? patient.ST_Side : "Not recorded"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ST_Area ? patient.ST_Area : "Not recorded"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ST_Time ? patient.ST_Time : "Not recorded"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ST_By ? patient.ST_By : "Not recorded"}
          />
        </ReportTableData>
      </ReportTableRow>
    </React.Fragment>
  ));
  //#endregion /skeletalTraumaRender = Skeletal Trauma Report

  //#region burnsRender = Burns Report
  const burnsRender = burnsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <HeadingTertiary text="Burns" marginBottom="0" />
      <FieldData
        field="Total &#37;"
        data={patient.TotalBox ? patient.TotalBox : "Not recorded"}
      />

      <Grid>
        <ColumnOne>
          <HeadingTertiary text="Head" marginBottom="0" />
          <FieldData
            field="Thickness"
            data={patient.t_Head ? patient.t_Head : "Not recorded"}
          />
          <FieldData
            field="&#37; Area"
            data={patient.HeadBox ? patient.HeadBox : "Not recorded"}
          />
          <FieldData
            field="Time Dressing Applied"
            data={
              patient.Head_Dressing_Time
                ? patient.Head_Dressing_Time
                : "Not recorded"
            }
          />
          <FieldData
            field="Time Cooling Applied"
            data={
              patient.Head_Cooling_Time
                ? patient.Head_Cooling_Time
                : "Not recorded"
            }
          />
        </ColumnOne>

        <ColumnTwo>
          <HeadingTertiary text="Torso" marginBottom="0" />
          <FieldData
            field="Thickness"
            data={patient.t_Torso ? patient.t_Torso : "Not recorded"}
          />
          <FieldData
            field="&#37; Area"
            data={patient.TorsoBox ? patient.TorsoBox : "Not recorded"}
          />
          <FieldData
            field="Time Dressing Applied"
            data={
              patient.Torso_Dressing_Time
                ? patient.Torso_Dressing_Time
                : "Not recorded"
            }
          />
          <FieldData
            field="Time Cooling Applied"
            data={
              patient.Torso_Cooling_Time
                ? patient.Torso_Cooling_Time
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <HeadingTertiary text="Limbs" marginBottom="0" />
          <FieldData
            field="Thickness"
            data={patient.t_Limbs ? patient.t_Limbs : "Not recorded"}
          />
          <FieldData
            field="&#37; Area"
            data={patient.LimbsBox ? patient.LimbsBox : "Not recorded"}
          />
          <FieldData
            field="Time Dressing Applied"
            data={
              patient.Limbs_Dressing_Time
                ? patient.Limbs_Dressing_Time
                : "Not recorded"
            }
          />
          <FieldData
            field="Time Cooling Applied"
            data={
              patient.Limbs_Cooling_Time
                ? patient.Limbs_Cooling_Time
                : "Not recorded"
            }
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /burnsRender = Burns Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
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
            <Loader background="#3a3a40" />
          </Render>
        </ReportContainer>
      </Section>
    );
  }

  return (
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
          {burnsData && burnsData.length > 0 ? (
            ({ burnsRender },
            (
              <ReportTableWrapper>
                <ReportTable>
                  <ReportTableHead>
                    <ReportTableRow>
                      <ReportTableHeading>
                        <p>Type</p>
                      </ReportTableHeading>
                      <ReportTableHeading>
                        <p>Site</p>
                      </ReportTableHeading>
                      <ReportTableHeading>
                        <p>Side</p>
                      </ReportTableHeading>
                      <ReportTableHeading>
                        <p>Area</p>
                      </ReportTableHeading>
                      <ReportTableHeading>
                        <p>Time</p>
                      </ReportTableHeading>
                      <ReportTableHeading>
                        <p>By</p>
                      </ReportTableHeading>
                    </ReportTableRow>
                  </ReportTableHead>

                  <ReportTableBody>{skeletalTraumaRender}</ReportTableBody>
                </ReportTable>
              </ReportTableWrapper>
            ))
          ) : (
            <FieldData data="There is no Trauma data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
