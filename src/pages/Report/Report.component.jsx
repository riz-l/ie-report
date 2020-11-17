// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Report.elements";

// Import: Components, SubPages
import { ReportHeader } from "../../components";
import { PatientReport, Notes } from "../subPages";

// Page: Report
export default function Report() {
  return (
    <Container>
      <Wrapper>
        <ReportHeader />
        <Switch>
          <Route path="/" exact>
            <PatientReport />
          </Route>

          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </Container>
  );
}
