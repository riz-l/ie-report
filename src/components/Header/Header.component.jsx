// Import: Dependencies
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as DropdownIcon } from "../../assets/img/icons/dropdown.svg";
import { ReactComponent as UpArrowIcon } from "../../assets/img/icons/uparrow.svg";

// Import: Elements
import { Container, DropdownButton, Logo, Wrapper } from "./Header.elements";

// Import: Components
import { Dropdown } from "../index";

// Component: Header
export default function Header() {
  // State = isDropdownOpen
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <DropdownButton
            onClick={() =>
              setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)
            }
          >
            {!isDropdownOpen ? <DropdownIcon /> : <UpArrowIcon />}
          </DropdownButton>

          <span>Patient Report</span>
        </Logo>

        <Dropdown isDropdownOpen={isDropdownOpen} />
      </Wrapper>
    </Container>
  );
}
