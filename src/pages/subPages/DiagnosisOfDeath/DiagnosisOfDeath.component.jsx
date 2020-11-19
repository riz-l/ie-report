// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./DiagnosisOfDeath.elements";

// Import: Renders
import {
  DODFirst,
  DODSecond,
  DODThird,
  DODFourth,
  DODFifth,
  DODSixth,
  DODSeventh,
} from "./renders";

// SubPage: DiagnosisOfDeath
export default function DiagnosisOfDeath() {
  return (
    <Container>
      {/* Diagnosis of Death */}
      <DODFirst />

      {/* Factors to Confirm... */}
      <DODSecond />

      {/* Advance Decisions to Refuse... */}
      <DODThird />

      {/* Termination of Resuscitation... */}
      <DODFourth />

      {/* Conditions Unequivocally Associated... */}
      <DODFifth />

      {/* Expected Death... */}
      <DODSixth />

      {/* Expected Death... */}
      <DODSeventh />
    </Container>
  );
}
