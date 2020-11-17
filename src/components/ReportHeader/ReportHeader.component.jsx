// Import: Dependencies
import React from "react";

// Import: Elements
import { ReportHeaderContainer, ReportHeaderOptions } from "./ReportHeader.elements"

// Import: Assets
import { ReactComponent as ReportIcon} from "../../assets/img/icons/report-icon.svg"
import { ReactComponent as NotesIcon} from "../../assets/img/icons/notes-icon.svg"
import { ReactComponent as MediaIcon} from "../../assets/img/icons/media-icon.svg"
import { ReactComponent as EcgIcon} from "../../assets/img/icons/ecg-icon.svg"
import { ReactComponent as DodIcon} from "../../assets/img/icons/dod-icon.svg"


// Component: ReportHeader
export default function ReportHeader() {
    return (
        <ReportHeaderContainer>
            <ReportHeaderOptions>
            <a
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
              </a>
            <a
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
              </a>
            <a
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
              </a>
            <a
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
              </a>
            <a
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
              </a>
            </ReportHeaderOptions>
        </ReportHeaderContainer>
    )
}