// Import: Dependencies
import React from "react";

// Import: Elements
import { Heading, Render, Section } from "./PRIvAccess.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
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
export default function PRIvAccess({
  selectedPatient,
  patientIVData,
  drugsMedsData,
  isLoading,
}) {
  //#region ivAccessRender = IV Access
  const ivAccessRender = patientIVData.map((patient) => (
    <React.Fragment key={patient.id}>
      <ReportTableRow>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_ID ? patient.IV_ID : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_Size ? patient.IV_Size : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_Site ? patient.IV_Site : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_Successful ? patient.IV_Successful : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_Flushed ? patient.IV_Flushed : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_Non_Touch ? patient.IV_Non_Touch : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_Attempts ? patient.IV_Attempts : null}
          ></FieldData>
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.IV_By ? patient.IV_By : null}
          ></FieldData>
        </ReportTableData>
      </ReportTableRow>
    </React.Fragment>
  ));
  //#endregion/ ivAccessRender = IV Access

  //#region ivAccessRender = IV Refusal
  const ivRefusalRender = patientIVData.map((patient) =>
    patient.IV_ID === "" ? (
      <React.Fragment key={patient.id}>
        <ReportTableRow>
          <ReportTableData>
            <FieldData
              fieldTextAlign="center"
              justifyContent="center"
              data={patient.IV_Type_Refusal ? patient.IV_Type_Refusal : null}
            />
          </ReportTableData>
          <ReportTableData>
            <FieldData
              fieldTextAlign="center"
              justifyContent="center"
              data={patient.IV_By_Refusal ? patient.IV_By_Refusal : null}
            />
          </ReportTableData>
        </ReportTableRow>
      </React.Fragment>
    ) : null
  );
  //#endregion/ ivRefusalRender = IV Refusal

  //#region drugsMedsRender = Drugs Meds
  const drugsMedsRender = drugsMedsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <ReportTableRow>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Name ? patient.Name : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Pouch ? patient.Pouch : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Time ? patient.Time : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Dosage ? patient.Dosage : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Unit ? patient.Unit : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Route ? patient.Route : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.By ? patient.By : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Own_Meds ? patient.Own_Meds : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Admin_PGD ? patient.Admin_PGD : null}
          />
        </ReportTableData>
      </ReportTableRow>
    </React.Fragment>
  ));
  //#endregion/ drugsMedsRender = Drugs Meds

  //#region drugsMedsRefusalRender = Drugs Meds Refusal
  const drugsMedsRefusalRender = drugsMedsData.map((patient) =>
    patient.Time === "" ? (
      <React.Fragment key={patient.id}>
        <ReportTableRow>
          <ReportTableData>
            <FieldData
              fieldTextAlign="center"
              justifyContent="center"
              data={patient.Drug_Refusal ? patient.Drug_Refusal : null}
            />
          </ReportTableData>
          <ReportTableData>
            <FieldData
              fieldTextAlign="center"
              justifyContent="center"
              data={patient.Name ? patient.Name : null}
            />
          </ReportTableData>
          <ReportTableData>
            <FieldData
              fieldTextAlign="center"
              justifyContent="center"
              data={patient.Drug_By_Refusal ? patient.Drug_By_Refusal : null}
            />
          </ReportTableData>
        </ReportTableRow>
      </React.Fragment>
    ) : null
  );
  //#endregion/ drugsMedsRefusalRender = Drugs Meds Refusal

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="IV Access and Medications"
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
          text="IV Access and Medications"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {patientIVData &&
          patientIVData.length > 0 &&
          drugsMedsData &&
          drugsMedsData.length > 0 ? (
            <>
              {/* IV Access */}
              {patientIVData && patientIVData.length > 0 ? (
                <>
                  <HeadingSecondary text="IV Access" />
                  <ReportTableWrapper>
                    <ReportTable>
                      <ReportTableHead>
                        <ReportTableRow>
                          <ReportTableHeading>
                            <p>Type</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Size</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Site</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Successful</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Flushed</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Non-Touch Technique</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Attempts</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>By</p>
                          </ReportTableHeading>
                        </ReportTableRow>
                      </ReportTableHead>

                      <ReportTableBody>{ivAccessRender}</ReportTableBody>
                    </ReportTable>
                  </ReportTableWrapper>
                </>
              ) : null}
              {/* IV Not Cannulated */}
              {patientIVData && patientIVData.length > 0 ? (
                <>
                  <HeadingSecondary text="IV Not Cannulated" marginTop="2rem" />
                  <ReportTableWrapper>
                    <ReportTable>
                      <ReportTableHead>
                        <ReportTableRow>
                          <ReportTableHeading>
                            <p>Type</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>By</p>
                          </ReportTableHeading>
                        </ReportTableRow>
                      </ReportTableHead>

                      <ReportTableBody>{ivRefusalRender}</ReportTableBody>
                    </ReportTable>
                  </ReportTableWrapper>
                </>
              ) : null}
              {/* Drugs/Meds */}
              {drugsMedsData && drugsMedsData.length > 0 ? (
                <>
                  <HeadingSecondary text="Drugs / Meds" marginTop="2rem" />
                  <ReportTableWrapper>
                    <ReportTable>
                      <ReportTableHead>
                        <ReportTableRow>
                          <ReportTableHeading>
                            <p>Drug</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Pouch No.</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Time</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Dosage</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Unit</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Route</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>By</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Own Medication</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Admin PGD</p>
                          </ReportTableHeading>
                        </ReportTableRow>
                      </ReportTableHead>

                      <ReportTableBody>{drugsMedsRender}</ReportTableBody>
                    </ReportTable>
                  </ReportTableWrapper>
                </>
              ) : null}
              {/* Drugs/Meds Refusal */}
              {drugsMedsData && drugsMedsData.length > 0 ? (
                <>
                  <HeadingSecondary text="Drugs Refusal" marginTop="2rem" />
                  <ReportTableWrapper>
                    <ReportTable>
                      <ReportTableHead>
                        <ReportTableRow>
                          <ReportTableHeading>
                            <p>Type</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Drug</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>By</p>
                          </ReportTableHeading>
                        </ReportTableRow>
                      </ReportTableHead>

                      <ReportTableBody>
                        {drugsMedsRefusalRender}
                      </ReportTableBody>
                    </ReportTable>
                  </ReportTableWrapper>
                </>
              ) : null}
            </>
          ) : (
            <FieldData data="There is no IV Access and Medications data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
