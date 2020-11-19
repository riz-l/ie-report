// Import: Dependencies
import React from "react";

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
  ReportContainer,
} from "../../../components";

// Import: Renders
import { PRFirst } from "./renders";

// SubPage: PatientReport
export default function PatientReport() {
  return (
    <Container>
      {/* Incident Information */}
      <PRFirst />

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

              <ColumnThree>
                <HeadingSecondary text="Next of Kin" />
                <FieldData field="Forename" data="data" />
                <FieldData field="Surname" data="data" />
                <FieldData field="Relationship to Patient" data="data" />
                <FieldData field="Contact Number" data="data" />
                <HeadingSecondary text="Patient GP" />
                <FieldData field="GP Surgery Name" data="data" />
                <FieldData field="GP Address" data="data" />
                <FieldData field="Other" data="data" />
              </ColumnThree>
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

              <ColumnThree>
                <FieldData field="The below section can also be populated using the Patient refusal slide out available in the Notes" />

                <HeadingTertiary text="Refused Assessment" />
                <FieldData field="Reason" data="data" />
                <FieldData field="Other" data="data" />

                <HeadingTertiary text="Refused Transport" />
                <FieldData field="Reason" data="data" />
                <FieldData field="Other" data="data" />

                <HeadingTertiary text="Refused Intervention/Treatment" />
                <FieldData field="Reason" data="data" />
                <FieldData field="Other" data="data" />
              </ColumnThree>
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
           <HeadingSecondary text="Mental Capacity Act" />
           <HeadingTertiary text="Does the Mental Capacity Act 2005 apply?" />

           <HeadingSecondary text="Patient Decisions" />
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

          <Render>
  
            <Grid>
              <ColumnOne>
                <FieldData field="Describe the decisions you're asking the Patient to make:" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Describe how the Patient has a disturbance of the mind, including a potential lack of capacity:" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <HeadingTertiary text="Please identify why the Patient is unable to make a decision:" />
                <FieldData field="Unable to understand information" data="data" />
                <FieldData field="Unable to retain information" data="data" />
                <FieldData field="Unable to use information to form a decision" data="data" />
                <FieldData field="Unable to communicate their decision" data="data" />
              </ColumnThree>
            </Grid>

            <Grid>
              <ColumnOne>
                <FieldData field="Describe the actions you have taken to assist the Patient in making their own decisions and gain capacity:" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Despite the actions taken previously, I believe that the Patient still lacks capacity because:" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="Is the desired treatment/assessment time critical and would delay cause immediate harm to the Patient:" data="data" />
              </ColumnThree>
            </Grid>

            <Grid>
              <ColumnOne>
                <FieldData field="Option A" data="data" />
                <FieldData field="Option B" data="data" />
              </ColumnOne>

              <ColumnTwo>
                <FieldData field="Option A" data="data" />
                <FieldData field="Option B" data="data" />
              </ColumnTwo>

              <ColumnThree>
                <FieldData field="I believe this option is the least restrictive and offers the Patient the appropriate care, which is proportionate to their condition and is in their best interests:" data="data" />
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

          <HeadingSecondary text="Patient Refusal" />
          <HeadingTertiary text="Refusal Statement/Signature" />
          <FieldData field="All the information and treatment options relating to my conditions/injuries have been explained. I fully understand the risks of refusing treatment or transport as advised by the ambulance clinician and I accept all responsibility for my own care." data="data" />

          <HeadingTertiary text="Patients / Guardians Name" />
          <Grid>
            <ColumnOne>
              <FieldData field="Name" data="data" />
            </ColumnOne>

            <ColumnTwo>
              <FieldData field="Patients/Guardian Signature" data="data" />
            </ColumnTwo>
          </Grid>
        </Render>
      </ReportContainer>
    </Container>
  );
}
