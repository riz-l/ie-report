// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Notes.elements";

// Import: Renders
import {
  NPresenting,
  NHistory,
  NMedical,
  NSocial,
  NFamily,
  NExamination,
  NImpression,
  NPlan,
  NAdditional,
} from "./renders";

// SubPage: Notes
export default function Notes({ isLoading, selectedPatient, notesData }) {
  return (
    <Container>
      {/* Presenting Complaint */}
      <NPresenting
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* History of Presenting Complaint */}
      <NHistory
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* Previous Medical History */}
      <NMedical
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* Social History */}
      <NSocial
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* Family History */}
      <NFamily
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* On Examination */}
      <NExamination
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* Impression */}
      <NImpression
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* Plan / Treatment */}
      <NPlan
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />

      {/* Additional Information */}
      <NAdditional
        isLoading={isLoading}
        notesData={notesData}
        selectedPatient={selectedPatient}
      />
    </Container>
  );
}
