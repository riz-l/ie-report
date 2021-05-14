// Import: Dependencies
import React, { useState, useEffect } from "react";

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
  ReportTable,
  ReportTableBody,
  ReportTableData,
  ReportTableHead,
  ReportTableHeading,
  ReportTableRow,
  ReportTableWrapper,
} from "../../../../../components";

// Render: PRTriage
export default function PRTriage({
  selectedPatient,
  isLoading,
  jointDecisionMakingData,
  specialistPathwaysData,
  majorTraumaData,
  manchesterTriageSystemData,
  pathfindersData,
}) {
  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  }, []);
  //#region specialistPathwaysRender = Specialist Pathways
  const specialistPathwaysRender = specialistPathwaysData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Pathway Used"
            data={
              patient.Pathway_Refusal ? patient.Pathway_Refusal : "Not recorded"
            }
          />
          <FieldData
            field="Patient refused pathway"
            data={
              patient.Pathway_NotApplicable
                ? patient.Pathway_NotApplicable
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Specialist Pathway"
            data={
              patient.SP_Specialist_Path
                ? patient.SP_Specialist_Path
                : "Not recorded"
            }
          />
          <FieldData
            field="Are there any indications that lead to a safeguarding concern?"
            data={
              patient.Safeguarding_Concern
                ? patient.Safeguarding_Concern
                : "Not recorded"
            }
          />
        </ColumnTwo>

        <ColumnThree>
          <></>
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));

  //#region majorTraumaRender = Major Trauma
  const majorTraumaRender = majorTraumaData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Pathway Used"
            data={
              patient.Pathway_Refusal ? patient.Pathway_Refusal : "Not recorded"
            }
          />
          <FieldData
            field="Patient refused pathway"
            data={
              patient.Pathway_NotApplicable
                ? patient.Pathway_NotApplicable
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Major Trauma Pathfinder"
            data={
              patient.MajorTrauma_Pathfinder
                ? patient.MajorTrauma_Pathfinder
                : "Not recorded"
            }
          />
          <FieldData
            field="Discriminator"
            data={
              patient.MJ_Discriminator
                ? patient.MJ_Discriminator
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="Outcome"
            data={patient.MJOutcome ? patient.MJOutcome : "Not recorded"}
          />
          <FieldData
            field="Are there any indications that lead to a safeguarding concern?"
            data={
              patient.Safeguarding_Concern
                ? patient.Safeguarding_Concern
                : "Not recorded"
            }
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /majorTraumaRender = Major Trauma

  //#region manchesterTriageSystemRender = Manchester Triage System
  const manchesterTriageSystemRender = manchesterTriageSystemData.map(
    (patient) => (
      <React.Fragment key={patient.id}>
        <Grid>
          <ColumnOne>
            <FieldData
              field="Pathway Used"
              data={
                patient.Pathway_Refusal
                  ? patient.Pathway_Refusal
                  : "Not recorded"
              }
            />
            <FieldData
              field="Not Qualified To"
              data={
                patient.Pathway_NotAvailable
                  ? patient.Pathway_NotAvailable
                  : "Not recorded"
              }
            />
            <FieldData
              field="Patient refused pathway"
              data={
                patient.Pathway_NotApplicable
                  ? patient.Pathway_NotApplicable
                  : "Not recorded"
              }
              marginBottom="2rem"
            />
          </ColumnOne>

          <ColumnTwo>
            <FieldData
              field="MTS Card"
              data={patient.MTS_Card ? patient.MTS_Card : "Not recorded"}
            />
            <FieldData
              field="MTS Discriminator"
              data={
                patient.MTS_Discriminator
                  ? patient.MTS_Discriminator
                  : "Not recorded"
              }
            />
            <FieldData
              field="Outcome Colour"
              data={patient.Outcome_RAB ? patient.Outcome_RAB : "Not recorded"}
              marginBottom="2rem"
            />
          </ColumnTwo>

          <ColumnThree>
            <FieldData
              field="Outcome Code"
              data={
                patient.Outcome_Code ? patient.Outcome_Code : "Not recorded"
              }
            />
            <FieldData
              field="Are there any indications that lead to a safeguarding concern?"
              data={
                patient.Safeguarding_Concern
                  ? patient.Safeguarding_Concern
                  : "Not recorded"
              }
            />
          </ColumnThree>
        </Grid>
      </React.Fragment>
    )
  );
  //#endregion /manchesterTriageSystemRender = Manchester TriageSystem

  //#region PathfindersRender = Pathfinders
  const pathfindersRender = pathfindersData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Pathway Used"
            data={
              patient.Pathway_Refusal ? patient.Pathway_Refusal : "Not recorded"
            }
          />
          <FieldData
            field="Not Qualified To"
            data={
              patient.Pathway_NotAvailable
                ? patient.Pathway_NotAvailable
                : "Not recorded"
            }
          />
          <FieldData
            field="Patient refused pathway"
            data={
              patient.Pathway_NotApplicable
                ? patient.Pathway_NotApplicable
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="MTS Card"
            data={patient.MTS_Card ? patient.MTS_Card : "Not recorded"}
          />
          <FieldData
            field="MTS Discriminator"
            data={
              patient.MTS_Discriminator
                ? patient.MTS_Discriminator
                : "Not recorded"
            }
          />
          <FieldData
            field="Outcome Colour"
            data={patient.Outcome_RAB ? patient.Outcome_RAB : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="Outcome Code"
            data={patient.Outcome_Code ? patient.Outcome_Code : "Not recorded"}
          />
          <FieldData
            field="Are there any indications that lead to a safeguarding concern?"
            data={
              patient.Safeguarding_Concern
                ? patient.Safeguarding_Concern
                : "Not recorded"
            }
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /PathfindersRender = Pathfinders

  //#region jointDecisionMakingRender
  const jointDecisionMakingRender = jointDecisionMakingData.map((patient) => (
    <React.Fragment key={patient.id}>
      <ReportTableRow>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.ActionTaken ? patient.ActionTaken : "Not recorded"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.TraumaCellAdvice
                ? patient.TraumaCellAdvice
                : "Not recorded"
            }
            fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.ClinicalSupportAdvice
                ? patient.ClinicalSupportAdvice
                : "Not recorded"
            }
            fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.OtherSupportAdvice
                ? patient.OtherSupportAdvice
                : "Not recorded"
            }
            fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.AdviceForm ? patient.AdviceForm : "Not recorded"}
            fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={
              patient.ClinicalSupportNotes
                ? patient.ClinicalSupportNotes
                : "Not recorded"
            }
          />
        </ReportTableData>
        <ReportTableData>
          <FieldData
            fieldTextAlign="center"
            justifyContent="center"
            data={patient.OtherAdvice ? patient.OtherAdvice : "Not recorded"}
          />
        </ReportTableData>
      </ReportTableRow>
    </React.Fragment>
  ));
  //#endregion /jointDecisonmakingRender = Joint Decision Making

  if (isLoading && selectedPatient !== null) {
    return (
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
          text="Triage and Pathfinder Support"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          <>
            {/* Specialist Pathways */}
            {specialistPathwaysData && specialistPathwaysData.length > 0 ? (
              <>
                <HeadingSecondary text="Specialist Pathways" marginBottom="0" />
                {specialistPathwaysRender}
              </>
            ) : null}
            {/* Major Trauma */}
            {majorTraumaData && majorTraumaData.length > 0 ? (
              <>
                <HeadingSecondary text="Major Trauma" marginBottom="0" />
                {majorTraumaRender}
              </>
            ) : null}
            {/* Manchester Triage System */}
            {manchesterTriageSystemData &&
            manchesterTriageSystemData.length > 0 ? (
              <>
                <HeadingSecondary
                  text="Manchester Triage System"
                  marginBottom="0"
                />
                {manchesterTriageSystemRender}
              </>
            ) : null}
            {/* Pathfinders */}
            {pathfindersData && pathfindersData.length > 0 ? (
              <>
                <HeadingSecondary text="Pathfinders" marginBottom="0" />
                {pathfindersRender}
              </>
            ) : null}
            {/* Joint Decision Making */}
            {jointDecisionMakingData && jointDecisionMakingData.length > 0 ? (
              <>
                <HeadingSecondary
                  text="Joint Decision Making"
                  marginBottom="0"
                />
                <ReportTableWrapper>
                  <ReportTable>
                    <ReportTableHead>
                      <ReportTableRow>
                        <ReportTableHeading>
                          <p>Action Taken</p>
                        </ReportTableHeading>
                        <ReportTableHeading>
                          <p>Trauma Cell</p>
                        </ReportTableHeading>
                        <ReportTableHeading>
                          <p>Clinical Hub</p>
                        </ReportTableHeading>
                        <ReportTableHeading>
                          <p>Other</p>
                        </ReportTableHeading>
                        <ReportTableHeading>
                          <p>Advice Given By</p>
                        </ReportTableHeading>
                        <ReportTableHeading>
                          <p>Note</p>
                        </ReportTableHeading>
                        <ReportTableHeading>
                          <p>Other (Please State)</p>
                        </ReportTableHeading>
                      </ReportTableRow>
                    </ReportTableHead>

                    <ReportTableBody>
                      {jointDecisionMakingRender}
                    </ReportTableBody>
                  </ReportTable>
                </ReportTableWrapper>
              </>
            ) : null}
          </>
          <FieldData
            marginTop="40px"
            data="There is no Triage and Pathfinder Support data for this Patient"
          />
        </Render>
      </ReportContainer>
    </Section>
  );
}
