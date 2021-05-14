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
} from "./PRCapacity.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRCapacity
export default function PRCapacity({
  selectedPatient,
  isLoading,
  mentalCapacityData,
  patientCapacityData,
  patientDecisionsData,
  bestInterestData,
}) {
  //#region mentalCapacityRender = Mental Capacity Render
  const mentalCapacityRender = mentalCapacityData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Is the Patient over 16 years of age?"
            data={patient.MCA_Age ? patient.MCA_Age : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Is there reason to doubt the Patients capacity?"
            data={patient.MCA_Reason ? patient.MCA_Reason : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="Is there a physical illness/injury that requires treatment?"
            data={patient.MCA_Treat ? patient.MCA_Treat : "Not recorded"}
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /sectionRender = Airways Report

  //#region patientDecisionsRender = Patient Decisions
  const patientDecisionsRender = patientDecisionsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Describe the decisions you're asking the Patient to make:"
            data={
              patient.p_DecisionBox ? patient.p_DecisionBox : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Describe how the Patient has a disturbance of the mind, including a potential lack of capacity:"
            data={
              patient.p_DescribeBox ? patient.p_DescribeBox : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <HeadingTertiary
            text="Please identify why the Patient is unable to make a decision:"
            marginBottom="1rem"
          />
          <FieldData
            field="Unable to understand information"
            data={
              patient.DE_Understand ? patient.DE_Understand : "Not recorded"
            }
          />
          <FieldData
            field="Unable to retain information"
            data={
              patient.DE_Information ? patient.DE_Information : "Not recorded"
            }
          />
          <FieldData
            field="Unable to use information to form a decision"
            data={patient.DE_Use ? patient.DE_Use : "Not recorded"}
          />
          <FieldData
            field="Unable to communicate their decision"
            data={
              patient.DE_Communicate ? patient.DE_Communicate : "Not recorded"
            }
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /patientDecisionsRender = Patient Decisions

  //#region patientCapacityRender = Patient Capacity
  const patientCapacityRender = patientCapacityData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Describe the actions you have taken to assist the Patient in making their own decisions and gain capacity:"
            data={
              patient.c_DescribeBox ? patient.c_DescribeBox : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Despite the actions taken previously, I believe that the Patient still lacks capacity because:"
            data={
              patient.c_PreviousBox ? patient.c_PreviousBox : "Not recorded"
            }
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="Is the desired treatment/assessment time critical and would delay cause immediate harm to the Patient:"
            data={patient.GC_Yes ? patient.GC_Yes : "Not recorded"}
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /patientCapacityRender = Patient Capacity

  //#region bestInterestRender = Best Interest Option
  const bestInterestRender = patientDecisionsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <ColumnOne>
          <FieldData
            field="Option A"
            data={patient.a_Box ? patient.a_Box : "Not recorded"}
          />
          <FieldData
            field="Option B"
            data={patient.b_Box ? patient.b_Box : "Not recorded"}
          />
        </ColumnOne>

        <ColumnTwo>
          <FieldData
            field="Option C"
            data={patient.c_Box ? patient.c_Box : "Not recorded"}
          />
          <FieldData
            field="Option D"
            data={patient.d_Box ? patient.d_Box : "Not recorded"}
            marginBottom="2rem"
          />
        </ColumnTwo>

        <ColumnThree>
          <FieldData
            field="I believe this option is the least restrictive and offers the Patient the appropriate care, which is proportionate to their condition and is in their best interests:"
            data={patient.OptionBox ? patient.OptionBox : "Not recorded"}
          />
        </ColumnThree>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /bestInterestRender = Best Interest Option

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Capacity to Consent"
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
          text="Capacity to Consent"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {mentalCapacityData &&
          mentalCapacityData.length > 0 &&
          patientDecisionsData &&
          patientDecisionsData.length > 0 &&
          patientCapacityData &&
          patientCapacityData.length > 0 &&
          bestInterestData &&
          bestInterestData.length > 0 ? (
            <>
              {/* Mental Capacity */}
              {mentalCapacityData && mentalCapacityData.length > 0 ? (
                <>
                  <HeadingSecondary text="Mental Capacity" marginBottom="0" />
                  <HeadingTertiary
                    text="Does the Mental Capacity Act 2005 apply?"
                    marginBottom="1rem"
                  />
                  {mentalCapacityRender}
                </>
              ) : null}
              {/* Patient Decisions */}
              {patientDecisionsData && patientDecisionsData.length > 0 ? (
                <>
                  <HeadingSecondary text="Patient Decisions" marginBottom="0" />
                  {patientDecisionsRender}
                </>
              ) : null}
              {/* Patient Capacity */}
              {patientCapacityData && patientCapacityData.length > 0 ? (
                <>
                  <HeadingSecondary text="Patient Capacity" marginBottom="0" />
                  {patientCapacityRender}
                </>
              ) : null}
              {/* Best Interest Option */}
              {bestInterestData && bestInterestData.length > 0 ? (
                <>
                  <HeadingSecondary
                    text="Best Interest Option"
                    marginBottom="0"
                  />
                  <HeadingTertiary
                    text="Best interest decision options (consider all options of care, giving consideration to expressed wishes of Patients and family)"
                    marginBottom="1rem"
                  />
                  {bestInterestRender}
                </>
              ) : null}
            </>
          ) : (
            <FieldData data="There is no Capacity to Consent data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
