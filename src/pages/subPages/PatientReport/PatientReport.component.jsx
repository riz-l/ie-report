// Import: Dependencies
import React from "react";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  Container,
  Grid,
  Heading,
  Render,
  Section,
} from "./PatientReport.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  ReportContainer,
} from "../../../components";

// Import: Renders
import {
  PRAirways,
  PRCapacity,
  PRCardiac,
  PRCardiovascular,
  PRClinical,
  PRCommunications,
  PRIncident,
  PRPatient,
  PRSign,
  PRTransport,
  PRTrauma,
  PRTriage,
} from "./renders";

// SubPage: PatientReport
export default function PatientReport() {
  return (
    <Container>
      {/* Incident Information */}
      <PRIncident />

      {/* Patient Details */}
      <PRPatient />

      {/* #TODO - Clinical Observations */}
      <PRClinical />

      {/* #TODO - IV Access and Medications */}

      {/* Cardiovascular Assessment */}
      <PRCardiovascular />

      {/* Airways Mangement */}
      <PRAirways />

      {/* Cardiac Arrest    */}
      <PRCardiac />

      {/* Transport Options */}
      <PRTransport />

      {/* Triage and Pathfinder Support */}
      <PRTriage />

      {/* Trauma Management */}
      <PRTrauma />

      {/* Communications, Consent, and Notifications */}
      <PRCommunications />

      {/* Capacity to Consent */}
      <PRCapacity />

      {/* Sign and Sync */}
      <PRSign />
    </Container>
  );
}
