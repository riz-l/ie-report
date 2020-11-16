// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as PatientIcon } from "../../assets/img/icons/patient.svg";

// Import: Elements
import {
  Container,
  IconContainer,
  Layout,
  PatientDetails,
  PatientName,
  PatientOther,
  PatientContainer,
  PatientWrapper,
} from "./Dropdown.elements";

// Component: Dropdown
export default function Dropdown({ isDropdownOpen }) {
  return (
    <Container isDropdownOpen={isDropdownOpen}>
      <Layout>
        <IconContainer>
          <PatientIcon />
          <p>Transport</p>
        </IconContainer>

        <PatientContainer>
          <PatientName>
            <p>Firstname</p>
            <p>Surname</p>
          </PatientName>

          <PatientWrapper>
            <PatientDetails>
              <p>Gender</p>
              <p>Date of Birth</p>
              <p>Reported Condition</p>
            </PatientDetails>

            <PatientOther>
              <p>Time Admitted</p>
              <p>Application User</p>
              <p>Status</p>
            </PatientOther>
          </PatientWrapper>
        </PatientContainer>
      </Layout>
    </Container>
  );
}
