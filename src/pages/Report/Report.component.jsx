// Import: Dependencies
import React from "react";
// import { Switch, Route } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Report.elements";

// Import: Components, SubPages
import { PatientReport } from "../subPages";

// Page: Report
export default function Report() {
  return (
    <Container>
      <Wrapper>
        <PatientReport />
      </Wrapper>
    </Container>
  );
}
