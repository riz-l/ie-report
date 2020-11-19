// Import: Dependencies
import React, { useState, useEffect } from "react";
import { cadDetails } from "../../../utils/axios";

// Import: Elements
import {
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  Container,
  Grid,
  Heading,
  Render,
  Section,
} from "./PatientReport.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../components";

// SubPage: PatientReport
export default function PatientReport() {
  // State = loading, incidentData
  const [loading, setLoading] = useState(true);
  const [incidentData, setIncidentData] = useState([]);

  // Patient Master_ePR_ID
  const patientId = "a6ef1fb3-2482-4ee3-b558-3d084d90247d";

  // Fetch Patient Data
  function getPatientData() {
    setLoading(true);

    cadDetails
      .get(`/${patientId}`, {})
      .then((res) => {
        const data = res.data;
        console.log("Incident Data: ", data);
        setIncidentData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  // Run getPatientData on load
  useEffect(() => {
    getPatientData();
  }, []);

  //#region incidentRender = Incident Information Report
  const incidentRender = incidentData.map((patient) => (
    <React.Fragment key={patient.id}>
      {/* Incident Information */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Incident Information"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Incident Number"
                  data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
                />
                <FieldData
                  field="Call Sign"
                  data={patient.ePR_User ? patient.ePR_User : "Not recorded"}
                />
                <FieldData
                  field="Call Data"
                  data={patient.CAD_Date ? patient.CAD_Date : "Not recorded"}
                />
                <FieldData
                  field="Dispatch Complaint"
                  data={
                    patient.CAD_Complaint
                      ? patient.CAD_Complaint
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Crew"
                  data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
                />
                <FieldData
                  field="Location of Incident"
                  data={
                    patient.CAD_LocAdd1 ||
                    patient.CAD_LocAdd2 ||
                    patient.CAD_LocCity ||
                    patient.CAD_LocPCode ? (
                      <>
                        {patient.CAD_LocAdd1}
                        <br />
                        {patient.CAD_LocAdd2}
                        <br />
                        {patient.CAD_LocCity}
                        <br />
                        {patient.CAD_LocPCode}
                      </>
                    ) : (
                      "Not recorded"
                    )
                  }
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Received"
                  data={
                    patient.CAD_IncidentDate
                      ? patient.CAD_IncidentDate
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Mobile"
                  data={
                    patient.CAD_Enroute ? patient.CAD_Enroute : "Not recorded"
                  }
                />
                <FieldData
                  field="On Scene"
                  data={
                    patient.CAD_ArriveScene
                      ? patient.CAD_ArriveScene
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="At Patient"
                  data={
                    patient.CAD_ArrivePatient
                      ? patient.CAD_ArrivePatient
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Left Scene"
                  data={
                    patient.CAD_DepartScene
                      ? patient.CAD_DepartScene
                      : "Not recorded"
                  }
                />
                <FieldData
                  field="Arrived Destination"
                  data={
                    patient.CAD_ArriveDest
                      ? patient.CAD_ArriveDest
                      : "Not recorded"
                  }
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>
    </React.Fragment>
  ));
  //#endregion /incidentRender = Incident Information Report

  return (
    <Container>
      {/* Incident Information */}
      {loading ? (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Incident Information"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <Loader background="#3a3a40" />
            </Render>
          </ReportContainer>
        </Section>
      ) : incidentData && incidentData.length > 0 ? (
        incidentRender
      ) : (
        <Section>
          <Heading>
            <HeadingPrimary
              icon="fas fa-file-medical-alt"
              text="Incident Information"
              padding="0.6rem"
            />
          </Heading>

          <ReportContainer>
            <Render>
              <FieldData data="There is no Incident Information data for this Patient" />
            </Render>
          </ReportContainer>
        </Section>
      )}

      {/* Patient Details */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Patient Details"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData field="Forename" data="Forename" />
                <FieldData field="Surname" data="Surname" />
                <FieldData field="Date of Birth" data="Date of Birth" />
                <FieldData field="Age (Years)" data="Age (Years)" />
                <FieldData field="Age (Years)" data="age (Months)" />
                <FieldData field="Gender" data="Gender" />
                <FieldData field="NHS No." data="NHS No." />
                <FieldData field="Ethnicity" data="Ethnicity" />
                <FieldData field="Weight (kg)" data="Weight (kg)" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Telephone" data="Telephone" />
                <FieldData field="Address" data="Address" />
                <FieldData
                  field="Patient has allergies?"
                  data="Patient has allergies?"
                />
                <FieldData field="Allergies" data="Allergies" />
                <FieldData
                  field="Patient takes medications?"
                  data="Patient takes medications?"
                />
                <FieldData field="Medication" data="Medication" />
              </ColumnTwo>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Cardiovascular Assessment */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Cardiovascular Assessment"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <HeadingSecondary text="Stroke Assessment" />
            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Condition" />
                <FieldData field="Suspected Stroke" data="data" />
                <FieldData field="Suspected TIA" data="data" />
                <FieldData field="BM Recorded" data="data" />
                <FieldData field="Referred to Hyper-Accute" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="FAST Assessment" />
                <FieldData field="FAST Assessment Outcome" data="data" />

                <Grid>
                  <ColumnOne>
                    <FieldData field="Face" data="data" />
                  </ColumnOne>

                  <ColumnTwo>
                    <FieldData field="Side (Face)" data="data" />
                  </ColumnTwo>
                </Grid>

                <Grid>
                  <ColumnOne>
                    <FieldData field="Arms" data="data" />
                  </ColumnOne>

                  <ColumnTwo>
                    <FieldData field="Side (Arms)" data="data" />
                  </ColumnTwo>
                </Grid>
                <FieldData field="Speech" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Witnessed Onset" data="data" />
                <FieldData field="Last time seen well" data="data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Airways Mangement */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Airways Management"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Big Valve Mask" />
                <FieldData field="Size" data="Size" />

                <HeadingTertiary text="Nasopharyngeal Airway" />
                <FieldData field="Size" data="Size" />
                <FieldData field="By" data="By" />

                <HeadingTertiary text="Oropharyngeal Airway" />
                <FieldData field="Size" data="Size" />
                <FieldData field="By" data="By" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Supraglottic Airway" />
                <FieldData field="Size" data="Size" />
                <FieldData field="By" data="By" />

                <HeadingTertiary text="Endotracheal" />
                <FieldData field="Size" data="Size" />
                <FieldData field="By" data="By" />
                <FieldData field="Grade of View" data="Grade of View" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary text="Surgical Cric" />
                <FieldData data="Surgical Cric" />
                <FieldData field="By" data="By" />

                <HeadingTertiary text="Suction" />
                <FieldData data="Suction" />
                <FieldData field="By" data="By" />

                <HeadingTertiary text="Thoracostomy" />
                <FieldData data="Thoracostomy" />
                <FieldData field="By" data="By" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Cardiac Arrest    */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Cardiac Arrest"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData field="Resus Attempted" data="Resus Attempted" />
                <FieldData field="Bystander CPR" data="Bystander CPR" />
                <FieldData
                  field="Time Compressions Started"
                  data="Time Compressions Started"
                />
                <FieldData field="Public AED" data="Public AED" />
                <FieldData
                  field="Time of First Public AED Shock"
                  data="Time of First Public AED Shock"
                  marginBottom="2rem"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="First Monitored Rhythm"
                  data="First Monitored Rhythm"
                />
                <FieldData field="NWAS Shocks" data="NWAS Shocks" />
                <FieldData
                  field="Time of First NWAS Shock"
                  data="Time of First NWAS Shock"
                />
                <FieldData
                  field="ROSC Present at Handover"
                  data="ROSC Present at Handover"
                  marginBottom="2rem"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Time of First ROSC"
                  data="Time of First ROSC"
                />
                <FieldData
                  field="Time of Subsequent ROSCs"
                  data="Time of Subsequent ROSCs"
                />
                <FieldData
                  field="Termination of Resus"
                  data="Termination of Resus"
                />
                <FieldData
                  field="Total No. of Shocks"
                  data="ROSC Present at Handover"
                  marginBottom="2rem"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Transport Options */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Transport Options"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Receiving Location"
                  data="Receiving Location"
                />
                <FieldData field="Destination Name" data="Destination Name" />
                <FieldData field="Other Location" data="Other Location" />
                <FieldData
                  field="Patient Own Meds Transported"
                  data="Patient Own Meds Transported"
                  marginBottom="2rem"
                />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Hospital Pre-Alert" />
                <FieldData field="Pre-Alert" data="Pre-Alert" />
                <FieldData field="Status" data="Status" />
                <FieldData field="Reason" data="Reason" />
                <FieldData field="Other" data="Other" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary text="Patients Mobility" />
                <FieldData
                  field="Scene to Ambulance"
                  data="Scene to Ambulance"
                />
                <FieldData
                  field="Ambulance to Hospital"
                  data="Ambulance to Hospital"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Triage and Pathfinder Support */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Triage and Pathfinder Support"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <HeadingSecondary text="Specialist Pathways Assessment" />
            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="data" />
                <FieldData field="Patient refused pathway" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Specialist Pathway" data="data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern?"
                  data="data"
                />
              </ColumnTwo>
            </Grid>

            <HeadingSecondary text="Major Trauma" />
            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="data" />
                <FieldData field="Patient refused pathway" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Major Trauma Pathfinder" data="data" />
                <FieldData field="Descriminator" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Outcome" data="data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern?"
                  data="data"
                />
              </ColumnThree>
            </Grid>

            <HeadingSecondary text="Manchester Triage System" />
            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="data" />
                <FieldData field="Not Qualified To" data="data" />
                <FieldData field="Patient refused pathway" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="MTS Card" data="data" />
                <FieldData field="MTS Descriminator" data="data" />
                <FieldData field="Outcome Colour" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Outcome Code" data="data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern"
                  data="data"
                />
              </ColumnThree>
            </Grid>

            <HeadingSecondary text="Pathfinders" />
            <Grid>
              <ColumnOne>
                <FieldData field="Pathway Used" data="data" />
                <FieldData field="Patient refused pathway" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Exclusion Reason" data="data" />
                <FieldData field="Medical Pathfinder" data="data" />
                <FieldData field="Pathfinder Discriminator" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Trauma Pathfinder" data="data" />
                <FieldData field="Pathfinder Discriminator" data="data" />
                <FieldData field="Pathfinder Outcome" data="data" />
                <FieldData
                  field="Are there any indications that lead to a safeguarding concern?"
                  data="data"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Trauma Management */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Trauma Management"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <HeadingSecondary text="Burns" />
            <FieldData field="Total &#37;" data="data" />
            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Head" />
                <FieldData field="Thickness" data="data" />
                <FieldData field="&#37; Area" data="data" />
                <FieldData field="time Dressing Applied" data="data" />
                <FieldData field="Time Cooling Applied" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Torso" />
                <FieldData field="Thickness" data="data" />
                <FieldData field="&#37; Area" data="data" />
                <FieldData field="time Dressing Applied" data="data" />
                <FieldData field="Time Cooling Applied" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary text="Limbs" />
                <FieldData field="Thickness" data="data" />
                <FieldData field="&#37; Area" data="data" />
                <FieldData field="time Dressing Applied" data="data" />
                <FieldData field="Time Cooling Applied" data="data" />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Communications, Consent, and Notifications */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Communications, Consent and Notifications"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <HeadingTertiary text="Communication" />
                <FieldData
                  field="Does the Patient have any communication or information needs (described in notes)"
                  data="Data"
                />
                <FieldData
                  field="NWAS improves the quality of care given to Patients through clinical audit, research and Patient feedback.
                        May we contact you after this incident to assist us in improving patient care?"
                  data="Data"
                />

                <HeadingTertiary text="Notification" />
                <FieldData field="Vulnerable Adult" data="data" />
                <FieldData field="Vulnerable Child" data="data" />
                <FieldData field="SUDC" data="data" />
                <FieldData field="DOD Form" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <HeadingTertiary text="Consent" />
                <FieldData
                  field="The Patient has demonstrated behaviour that indicates they may not have the 
                capacity to make decisions for themself. YES - Complete Capacity to Consent."
                  data="data"
                />
                <FieldData
                  field="Does the Patient have capacity?"
                  data="data"
                />
                <FieldData
                  field="Consent gained for care detailed on this PRF?"
                  data="data"
                />
              </ColumnTwo>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Capacity to Consent */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Capacity to Consent"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <HeadingSecondary text="Mental Capacity Act" />
            <HeadingTertiary text="Does the Mental Capacity Act 2005 apply?" />
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Is the Patient over 16 years of age?"
                  data="data"
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Is there reason to doubt the Patients capacity?"
                  data="data"
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Is there a physical illness/injury that requires treatment?"
                  data="data"
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Sign and Sync */}
      <Heading>
        <HeadingPrimary
          icon="fas fa-file-medical-alt"
          text="Sign and Sync"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          <HeadingSecondary text="Final Impression and Clinical Signatures" />
          <Grid>
            <ColumnOne>
              <HeadingTertiary text="Final Impression" />
              <FieldData field="Final Impression" data="data" />
            </ColumnOne>

            <ColumnTwo>
              <HeadingTertiary text="Clinical Assessment Completed By" />
              <FieldData field="Staff Number" data="data" />
              <FieldData field="Registration No." data="data" />
              <FieldData field="Staff Signature" data="data" />
            </ColumnTwo>

            <ColumnThree>
              <HeadingTertiary text="Senior Clinician's Signature" />
              <FieldData field="Staff Number" data="data" />
              <FieldData field="Registration No." data="data" />
              <FieldData field="Senior Clinician's Signature" data="data" />
            </ColumnThree>
          </Grid>
        </Render>
      </ReportContainer>
    </Container>
  );
}
