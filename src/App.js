// Import: Dependencies
import React from "react";

// Import: Components, Pages
import { Header, ReportHeader } from "./components";
import { Report } from "./pages";

// Component: App
export default function App() {
  return (
    <>
      <Header />
      <ReportHeader />
      <Report />
    </>
  );
}
