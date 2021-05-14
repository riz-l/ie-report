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
export default function DiagnosisOfDeath({
  isLoading,
  selectedPatient,
  diagnosisOfDeathData,
}) {
  return (
    <Container>
      {/* Diagnosis of Death */}
      <DODDiagnosis
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Factors to Confirm... */}
      <DODFactors
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Advance Decisions to Refuse... */}
      <DODAdvance
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Termination of Resuscitation... */}
      <DODTermination
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Conditions Unequivocally Associated... */}
      <DODConditions
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Expected Death... */}
      <DODExpected
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Expected Attendance... */}
      <DODAttendance
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />
    </Container>
  );
}
