// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Notes.elements";

// Import: Renders
import {
  NPres,
  NHis,
  NPrev,
  NSoc,
  NFam,
  NOn,
  NImp,
  NPlan,
  NAdd,
} from "./renders";

// SubPage: Notes
export default function Notes() {
  return (
    <Container>
      {/* Presenting Complaint */}
      <NPres />

      {/* History of Presenting Complaint */}
      <NHis />

      {/* Previous Medical History */}
      <NPrev />

      {/* Social History */}
      <NSoc />

      {/* Family History */}
      <NFam />

      {/* On Examination */}
      <NOn />

      {/* Impression */}
      <NImp />

      {/* Plan / Treatment */}
      <NPlan />

      {/* Additional Information */}
      <NAdd />
    </Container>
  );
}
