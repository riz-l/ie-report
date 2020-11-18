// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Report.elements";

// Import: Components, SubPages
import { PatientTile, ReportHeader } from "../../components";
import {
  DiagnosisOfDeath,
  Ecg,
  Media,
  Notes,
  PatientReport,
} from "../subPages";

// Page: Report
export default function Report() {
  return (
    <Container>
      <Wrapper>
        <ReportHeader />
        <PatientTile />

        <Switch>
          <Route path="/" exact>
            <PatientReport />
          </Route>

          <Route path="/notes">
            <Notes />
          </Route>

          <Route path="/media">
            <Media />
          </Route>

          <Route path="/ecg">
            <Ecg />
          </Route>

          <Route path="/diagnosisofdeath">
            <DiagnosisOfDeath />
          </Route>
        </Switch>
      </Wrapper>
    </Container>
  );
}
