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
} from "./PRCardiovascular.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
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

// Render: PRCardiovascular
export default function PRCardiovascular({
  selectedPatient,
  cardiacChestPainData,
  strokeAssessmentData,
  isLoading,
}) {
  //#region cardiacChestPainRender = Cardiac chest Pain
  const cardiacChestPainRender = cardiacChestPainData.map((patient) => (
    <React.Fragment key={patient.id}>
      <ReportTableRow>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Time_Onset ? patient.Time_Onset : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Time_Obtained ? patient.Time_Obtained : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Four_Rhythm ? patient.Four_Rhythm : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Twelve_Rhythm ? patient.Twelve_Rhythm : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ECG_Other ? patient.ECG_Other : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.STEMI ? patient.STEMI : null}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.PADS_applied ? patient.PADS_applied : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.Referred_To_PCI ? patient.Referred_To_PCI : null}
          />
        </ReportTableData>
        <ReportTableData>
          {" "}
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.TCP ? patient.TCP : null}
          />
        </ReportTableData>
      </ReportTableRow>
    </React.Fragment>
  ));
  //#endregion /cardiacChestPainRender = Cardiac chest Pain

  //#region strokeAssessmentRender = Stroke Assessment
  const strokeAssessmentRender = strokeAssessmentData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <HeadingTertiary text="Condition" marginBottom="0" />
          <FieldData
            field="Suspected Stroke"
            data={patient.SI_Suspected ? patient.SI_Suspected : "Not recorded"}
          />
          <FieldData
            field="Suspected TIA"
            data={patient.SI_TIA ? patient.SI_TIA : "Not recorded"}
          />
          <FieldData
            field="BM Recorded"
            data={patient.BM_Recorded ? patient.BM_Recorded : "Not recorded"}
          />
          <FieldData
            field="Referred to Hyper-Accute"
            data={
              patient.Referred_Acute ? patient.Referred_Acute : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <HeadingTertiary text="FAST Assessment" marginBottom="0" />
          <FieldData
            field="FAST Assessment Outcome"
            data={
              patient.FAST_Positive ? patient.FAST_Positive : "Not recorded"
            }
          />

          <Grid>
            <ColumnOne>
              <FieldData
                field="Face"
                data={patient.SI_Face ? patient.SI_Face : "Not recorded"}
              />
            </ColumnOne>

            <ColumnTwo>
              <FieldData
                field="Side (Face)"
                data={patient.Face_Box ? patient.Face_Box : "Not recorded"}
              />
            </ColumnTwo>
          </Grid>

          <Grid>
            <ColumnOne>
              <FieldData
                field="Arms"
                data={patient.SI_Arms ? patient.SI_Arms : "Not recorded"}
              />
            </ColumnOne>

            <ColumnTwo>
              <FieldData
                field="Side (Arms)"
                data={patient.Arms_Box ? patient.Arms_Box : "Not recorded"}
              />
            </ColumnTwo>
          </Grid>

          <FieldData
            field="Speech"
            data={patient.SI_Speech ? patient.SI_Speech : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="Witnessed Onset"
            data={patient.Onset_Time ? patient.Onset_Time : "Not recorded"}
          />
          <FieldData
            field="Last time seen well"
            data={patient.Last_Time ? patient.Last_Time : "Not recorded"}
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /strokeAssessmentRender = Stroke Assessment

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Cardiovascular Assessment"
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
          text="Cardiovascular Assessment"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {cardiacChestPainData &&
          cardiacChestPainData.length > 0 &&
          strokeAssessmentData &&
          strokeAssessmentData.length > 0 ? (
            <>
              {/* Cardiac Assessment */}
              {cardiacChestPainData && cardiacChestPainData.length > 0 ? (
                <>
                  <HeadingSecondary text="Cardiac Assessment" />
                  <ReportTableWrapper>
                    <ReportTable>
                      <ReportTableHead>
                        <ReportTableRow>
                          <ReportTableHeading>
                            <p>Time Onset</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Time Obtained</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>4 Rhythm</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>12 Rhythm</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Other Rhythm</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>STEMI</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>PADs Applied</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>Referred to Primary PCI</p>
                          </ReportTableHeading>
                          <ReportTableHeading>
                            <p>TCP</p>
                          </ReportTableHeading>
                        </ReportTableRow>
                      </ReportTableHead>

                      <ReportTableBody>
                        {cardiacChestPainRender}
                      </ReportTableBody>
                    </ReportTable>
                  </ReportTableWrapper>
                </>
              ) : null}
              {/* Stroke Assessment */}
              {strokeAssessmentData && strokeAssessmentData.length > 0 ? (
                <>
                  <HeadingSecondary text="Stroke Assessment" marginTop="2rem" />
                  {strokeAssessmentRender}
                </>
              ) : null}
            </>
          ) : (
            <FieldData data="There is no Cardiovascular Assessment data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
