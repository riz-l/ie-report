// Import: Dependencies
import React from "react";

// Import: Elements
import { Heading, Render, Section } from "./PRClinical.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
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

// Render: PRIncident
export default function PRIncident({
  selectedPatient,
  clinicalObservationsData,
  isLoading,
}) {
  //#region reportRender = Clinical Observation report
  const reportRender = clinicalObservationsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <ReportTableRow>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Time ? patient.Obs_Time : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Resp_Rate ? patient.Obs_Resp_Rate : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_SpO2 ? patient.Obs_SpO2 : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Oxygen ? patient.Obs_Oxygen : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Temp ? patient.Obs_Temp : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.Obs_BP_Sys || patient.Obs_BP_Dia ? (
                <>
                  {patient.Obs_BP_Sys} / {patient.Obs_BP_Dia}
                </>
              ) : null
            }
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Heart_Rate ? patient.Obs_Heart_Rate : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_AVPU ? patient.Obs_AVPU : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_NEWS_Total ? patient.Obs_NEWS_Total : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Cap_Refill ? patient.Obs_Cap_Refill : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.Obs_EVM_Eye ||
              patient.Obs_EVM_Voice ||
              patient.Obs_EVM_Motor ? (
                <>
                  {patient.Obs_EVM_Eye} / {patient.Obs_EVM_Voice} /{" "}
                  {patient.Obs_EVM_Motor}
                </>
              ) : null
            }
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_EVM_Total ? patient.Obs_EVM_Total : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_BM ? patient.Obs_BM : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.Obs_Pupils_Size_Left || patient.Obs_Pupils_Size_Right ? (
                <>
                  {patient.Obs_Pupils_Size_Left} /{" "}
                  {patient.Obs_Pupils_Size_Right}
                </>
              ) : null
            }
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.Obs_Pupils_React_Left ||
              patient.Obs_Pupils_React_Right ? (
                <>
                  {patient.Obs_Pupils_React_Left} /{" "}
                  {patient.Obs_Pupils_React_Right}
                </>
              ) : null
            }
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Pain_Score ? patient.Obs_Pain_Score : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Obs_Peak_Flow ? patient.Obs_Peak_Flow : null}
          />
        </ReportTableData>
      </ReportTableRow>
    </React.Fragment>
  ));
  //#endregion / reportRender = Clinical Observation Report

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
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
    );
  }

  return (
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
          {clinicalObservationsData && clinicalObservationsData.length > 0 ? (
            <ReportTableWrapper>
              <ReportTable>
                <ReportTableHead>
                  <ReportTableRow>
                    <ReportTableHeading>
                      <p>Time</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Resp Rate</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>SpO2 (&#37;)</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Air/Oxygen</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Temp (&#176;C)</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>BP (MMHG)</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Heart Rate</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>ACVPU</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>NEWS2 Total</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Cap Refill (sec)</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>GCS</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>GCS Total</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>BM (M/Mol)</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Pupils Size (mm)</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Pupils React</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Pain Score</p>
                    </ReportTableHeading>
                    <ReportTableHeading>
                      <p>Peak Flow (l/min)</p>
                    </ReportTableHeading>
                  </ReportTableRow>
                </ReportTableHead>

                <ReportTableBody>{reportRender}</ReportTableBody>
              </ReportTable>
            </ReportTableWrapper>
          ) : (
            <FieldData data="There is no Clinical Observations data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
