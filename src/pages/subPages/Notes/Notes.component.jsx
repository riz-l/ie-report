// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Notes.elements";

// Import: Renders
import {
  NFirst,
  NSecond,
  NThird,
  NFourth,
  NFifth,
  NSixth,
  NSeventh,
  NEighth,
  NNinth,
} from "./renders";

// SubPage: Notes
export default function Notes() {
  return (
    <Container>
      {/* Presenting Complaint */}
      <NFirst />

      {/* History of Presenting Complaint */}
      <NSecond />

      {/* Previous Medical History */}
      <NThird />

      {/* Social History */}
      <NFourth />

      {/* Family History */}
      <NFifth />

      {/* On Examination */}
      <NSixth />

      {/* Impression */}
      <NSeventh />

      {/* Plan / Treatment */}
      <NEighth />

      {/* Additional Information */}
      <NNinth />
    </Container>
  );
}
