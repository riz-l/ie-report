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
} from "./PRCommunications.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../../components";

// Render: PRCommunications
export default function PRCommunications({
  selectedPatient,
  isLoading,
  communicationsConsentNotificationsData,
  patientRefusalData,
}) {
  const patientRefusalRender = patientRefusalData.map((patient) => (
    <React.Fragment key={patient.id}>
      <FieldData field="The below section can also be populated using the Patient refusal slide out available in the Notes" />

      <HeadingTertiary text="Refused Assessment" marginBottom="0" />
      <FieldData
        field="Reason"
        data={patient.As_Reason ? patient.As_Reason : "Not recorded"}
      />
      <FieldData
        field="Other"
        data={patient.As_Other ? patient.As_Other : "Not recorded"}
        marginBottom="2rem"
      />

      <HeadingTertiary text="Refused Transport" marginBottom="0" />
      <FieldData
        field="Reason"
        data={patient.Tran_Reason ? patient.Tran_Reason : "Not recorded"}
      />
      <FieldData
        field="Other"
        data={patient.Tran_Other ? patient.Tran_Other : "Not recorded"}
        marginBottom="2rem"
      />

      <HeadingTertiary text="Refused Intervention/Treatment" marginBottom="0" />
      <FieldData
        field="Reason"
        data={patient.Int_Reason ? patient.Int_Reason : "Not recorded"}
      />
      <FieldData
        field="Other"
        data={patient.Int_Other ? patient.Int_Other : "Not recorded"}
        marginBottom="2rem"
      />
    </React.Fragment>
  ));
  //#endregion /patientRefusalRender = Patient Refusal Report

  const communicationsConsentNotificationsRender = communicationsConsentNotificationsData.map(
    (patient) => (
      <React.Fragment key={patient.id}>
        <Grid>
          <ColumnOne>
            <HeadingTertiary text="Communication" marginBottom="0" />
            <FieldData
              field="Does the Patient have any communication or information needs (described in notes)?"
              data={
                patient.CommsNeeds_YN ? patient.CommsNeeds_YN : "Not recorded"
              }
            />
            <FieldData
              field="NWAS improves the quality of care given to Patients through clinical audit, research and Patient feedback.
              
              May we contact you after this incident to assist us in improving patient care?"
              data={
                patient.ImprovePatCare_YN
                  ? patient.ImprovePatCare_YN
                  : "Not recorded"
              }
              marginBottom="2rem"
            />

            <HeadingTertiary text="Notifications" marginBottom="0" />
            <FieldData
              field="Vulnerable Adult"
              data={
                patient.NotifyVulnerableAdult
                  ? patient.NotifyVulnerableAdult
                  : "Not recorded"
              }
            />
            <FieldData
              field="Vulnerable Child"
              data={
                patient.NotifyVulnerableChild
                  ? patient.NotifyVulnerableChild
                  : "Not recorded"
              }
            />
            <FieldData
              field="SUDC"
              data={patient.SUDC ? patient.SUDC : "Not recorded"}
            />
            <FieldData
              field="DOD Form"
              data={patient.DOD_Form ? patient.DOD_Form : "Not recorded"}
              marginBottom="2rem"
            />
          </ColumnOne>

          <ColumnTwo>
            <HeadingTertiary text="Consent" marginBottom="0" />
            <FieldData
              field="The Patient has demonstrated behaviour that indicates they may not have the capacity to make decisions for themself. YES - Complete Capacity to Consent."
              data={
                patient.NoCapacityDemoed_YN
                  ? patient.NoCapacityDemoed_YN
                  : "Not recorded"
              }
            />
            <FieldData
              field="Does the Patient have capacity?"
              data={
                patient.PatientHasCapacity_YN
                  ? patient.PatientHasCapacity_YN
                  : "Not recorded"
              }
            />
            <FieldData
              field="Consent gained for care detailed on this PRF?"
              data={
                patient.ConsentGainedPRF_YN
                  ? patient.ConsentGainedPRF_YN
                  : "Not recorded"
              }
              marginBottom="2rem"
            />
          </ColumnTwo>

          <ColumnThree>{patientRefusalRender}</ColumnThree>
        </Grid>
      </React.Fragment>
    )
  );
  //#endregion /communicationsConsentNotificationsRender = Communications, Consent, and Notifications Report

  if (isLoading && selectedPatient !== null) {
    return (
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Communications, Consent and Notifications"
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
          text="Communications, Consent and Notifications"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {communicationsConsentNotificationsData &&
          communicationsConsentNotificationsData.length > 0 ? (
            communicationsConsentNotificationsRender
          ) : (
            <FieldData data="There is no Communications, Consent and Notifications data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Section>
  );
}
