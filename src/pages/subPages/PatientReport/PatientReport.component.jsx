// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./PatientReport.elements";

// Import: Renders
import { PRAirways } from "./renders";
import { PRCapacity } from "./renders";
import { PRCardiac } from "./renders";
import { PRCardiovascular } from "./renders";
import { PRClinical } from "./renders";
import { PRCommunications } from "./renders";
import { PRIncident } from "./renders";
import { PRIvAccess } from "./renders";
import { PRPatient } from "./renders";
import { PRSign } from "./renders";
import { PRTransport } from "./renders";
import { PRTrauma } from "./renders";
import { PRTriage } from "./renders";

// SubPage: PatientReport
export default function PatientReport({
  selectedPatient,
  cadDetailsData,
  patientDetailsData,
  nokData,
  clinicalObservationsData,
  patientIVData,
  drugsMedsData,
  cardiacChestPainData,
  strokeAssessmentData,
  airwaysManagementData,
  cardiacArrestData,
  transportOptionsData,
  specialistPathwaysData,
  majorTraumaData,
  manchesterTriageSystemData,
  pathfindersData,
  jointDecisionMakingData,
  skeletalTraumaData,
  burnsData,
  communicationsConsentNotificationsData,
  patientRefusalData,
  mentalCapacityData,
  patientDecisionsData,
  patientCapacityData,
  bestInterestData,
  signAndSyncData,
  isLoading,
}) {
  // console.log("NOK Date: ", nokData);
  // console.log("PD Date: ", patientDetailsData);
  // console.log("CAD Date: ", cadDetailsData);

  return (
    <Container>
      {/* Incident Information */}
      <PRIncident
        selectedPatient={selectedPatient}
        cadDetailsData={cadDetailsData}
        isLoading={isLoading}
      />

      {/* Patient Details */}
      <PRPatient
        selectedPatient={selectedPatient}
        patientDetailsData={patientDetailsData}
        nokData={nokData}
        isLoading={isLoading}
      />

      {/* Clincal Observations  */}
      <PRClinical
        selectedPatient={selectedPatient}
        clinicalObservationsData={clinicalObservationsData}
        isLoading={isLoading}
      />

      {/* Iv Access */}
      <PRIvAccess
        selectedPatient={selectedPatient}
        patientIVData={patientIVData}
        drugsMedsData={drugsMedsData}
        isLoading={isLoading}
      />

      {/* Cardiovascular Assessment */}
      <PRCardiovascular
        selectedPatient={selectedPatient}
        cardiacChestPainData={cardiacChestPainData}
        strokeAssessmentData={strokeAssessmentData}
        isLoading={isLoading}
      />

      {/* Airways Mangement */}
      <PRAirways
        selectedPatient={selectedPatient}
        airwaysManagementData={airwaysManagementData}
        isLoading={isLoading}
      />

      {/* Cardiac Arrest    */}
      <PRCardiac
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        cardiacArrestData={cardiacArrestData}
      />

      {/* Transport Options */}
      <PRTransport
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        transportOptionsData={transportOptionsData}
      />

      {/* Triage and Pathfinder Support */}
      <PRTriage
        isLoading={isLoading}
        selectedPatient={selectedPatient}
        jointDecisionMakingData={jointDecisionMakingData}
        specialistPathwaysData={specialistPathwaysData}
        majorTraumaData={majorTraumaData}
        manchesterTriageSystemData={manchesterTriageSystemData}
        pathfindersData={pathfindersData}
      />

      {/* Trauma Management */}
      <PRTrauma
        burnsData={burnsData}
        skeletalTraumaData={skeletalTraumaData}
        isLoading={isLoading}
        selectedPatient={selectedPatient}
      />

      {/* Communications, Consent, and Notifications */}
      <PRCommunications
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        patientRefusalData={patientRefusalData}
        communicationsConsentNotificationsData={
          communicationsConsentNotificationsData
        }
      />

      {/* Capacity to Consent */}
      <PRCapacity
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        mentalCapacityData={mentalCapacityData}
        patientDecisionsData={patientDecisionsData}
        patientCapacityData={patientCapacityData}
        bestInterestData={bestInterestData}
      />

      {/* Sign and Sync */}
      <PRSign
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        signAndSyncData={signAndSyncData}
      />
    </Container>
  );
}
