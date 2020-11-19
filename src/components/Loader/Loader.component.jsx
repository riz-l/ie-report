// Import: Dependencies
import React from "react";

// Import: Elements
import { Spinner } from "./Loader.elements";

// Component: Loader
export default function Loader({ background }) {
  return (
    <Spinner>
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
      <div style={{ background: `${background}` }} />
    </Spinner>
  );
}
