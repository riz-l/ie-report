// Import: Dependencies
import React from "react";
import { NavLink } from "react-router-dom";

// Import: Elements
import { Container, Options } from "./ReportHeader.elements";

// Import: Assets
import { ReactComponent as ReportIcon } from "../../assets/img/icons/report-icon.svg";
import { ReactComponent as NotesIcon } from "../../assets/img/icons/notes-icon.svg";
import { ReactComponent as MediaIcon } from "../../assets/img/icons/media-icon.svg";
import { ReactComponent as EcgIcon } from "../../assets/img/icons/ecg-icon.svg";
import { ReactComponent as DodIcon } from "../../assets/img/icons/dod-icon.svg";

// Component: ReportHeader
export default function ReportHeader() {
  return (
    <Container>
      <Options>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/"
          exact
        >
          <ReportIcon />
          <li>Report</li>
        </NavLink>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/"
          exact
        >
          <NotesIcon />
          <li>Notes</li>
        </NavLink>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/"
          exact
        >
          <MediaIcon />
          <li>Media</li>
        </NavLink>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/"
          exact
        >
          <EcgIcon />
          <li>ECG</li>
        </NavLink>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/"
          exact
        >
          <DodIcon />
          <li>DoD</li>
        </NavLink>
      </Options>
    </Container>
  );
}
