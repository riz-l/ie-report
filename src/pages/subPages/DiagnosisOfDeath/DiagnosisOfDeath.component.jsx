// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./DiagnosisOfDeath.elements";

// Import: Renders
import {
  DODDiagnosis,
  DODFactors,
  DODAdvance,
  DODTermination,
  DODConditions,
  DODExpected,
  DODAttendance,
} from "./renders";

// SubPage: DiagnosisOfDeath
export default function DiagnosisOfDeath() {
  return (
    <Container>
      {/* Diagnosis of Death */}
      <DODDiagnosis />

      {/* Factors to Confirm... */}
      <DODFactors />

      {/* Advance Decisions to Refuse... */}
      <DODAdvance />

      {/* Termination of Resuscitation... */}
      <DODTermination />

      {/* Conditions Unequivocally Associated... */}
      <DODConditions />

      {/* Expected Death... */}
      <DODExpected />

      {/* Expected Attendance... */}
      <DODAttendance />
    </Container>
  );
}
