// Import: Dependencies
import React, { useState, useEffect } from "react";
import { diagnosisOfDeath } from "../../../utils/axios";

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
} from "./DiagnosisOfDeath.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../components";

// SubPage: DiagnosisOfDeath
export default function DiagnosisOfDeath() {
  // State = dodData, loading
  const [dodData, setDodData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Patient Master_ePR_ID
  const patientId = "282e3dbb-a766-4185-8343-45e4e12d3587";

  // Fetch Patient Data
  function getPatientData() {
    setLoading(true);

    diagnosisOfDeath
      .get(`/${patientId}`, {})
      .then((res) => {
        const data = res.data;
        console.log("DoD Data: ", data);
        setDodData(data);
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

  //#region dodRender = Diagnosis of Death Report
  const dodRender = dodData.map((patient) => (
    <React.Fragment key={patient.id}>
      {/* Diagnosis of Death */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Diagnosis Of Death"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Diagnosis of Death Timed At"
                  data={patient.DoD_Time ? patient.DoD_Time : "Not recorded"}
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Privacy"
                  data={patient.Privacy ? patient.Privacy : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Diagnosis of Death Confirmed By"
                  data={patient.Confirmed ? patient.Confirmed : "Not recorded"}
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Factors to Confirm */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="&#62; 15 minutes since the onset of collapse"
                  data={patient.DoD_Onset ? patient.DoD_Onset : "Not recorded"}
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Asystole for &#62; 30 seconds on the ECG monitor"
                  data={patient.DoD_ECG ? patient.DoD_ECG : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="No effective CPR prior to arrival of ambulance"
                  data={patient.DoD_CPR ? patient.DoD_CPR : "Not recorded"}
                />
              </ColumnThree>
            </Grid>

            <HeadingTertiary text="All of the above MUST be confirmed" />
          </Render>
        </ReportContainer>
      </Section>

      {/* Advance Decisions to Refuse */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <FieldData
              field="Decision"
              data={patient.Decision ? patient.Decision : "Not recorded"}
            />
          </Render>
        </ReportContainer>
      </Section>

      {/* Termination of Resuscitation */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Continuous chest compressions"
                  data={patient.DoD_Chest ? patient.DoD_Chest : "Not recorded"}
                />
                <FieldData
                  field="Circulatory Access (IV or IO)"
                  data={
                    patient.DoD_Circulatory
                      ? patient.DoD_Circulatory
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="No palpable pulse"
                  data={patient.DoD_Pulse ? patient.DoD_Pulse : "Not recorded"}
                />
                <FieldData
                  field="20 minutes of Asystole. Printed ECG for &#62; 30 seconds"
                  data={patient.DoD_ALS ? patient.DoD_ALS : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Secured Airway (supraglottic or ET)"
                  data={
                    patient.DoD_Airway ? patient.DoD_Airway : "Not recorded"
                  }
                />
                <FieldData
                  field="Where appropriate, IV/IO admin of at least 4 x 1mg adrenaline and amiodarone"
                  data={patient.DoD_Admin ? patient.DoD_Admin : "Not recorded"}
                />
                <FieldData
                  field="No signs of respiration"
                  data={
                    patient.DoD_Respiration
                      ? patient.DoD_Respiration
                      : "Not recorded"
                  }
                />
              </ColumnThree>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Conditions Unequivocally Associated */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="D. Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <FieldData
              field="Condition"
              data={patient.Condition ? patient.Condition : "Not recorded"}
            />
          </Render>
        </ReportContainer>
      </Section>

      {/* Expected Death */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="E. Expected Death Due to Illness or Pre-Existing Condition"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Expected Death due to a terminal illness"
                  data={
                    patient.DoD_Terminal ? patient.DoD_Terminal : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="Explanation"
                  data={
                    patient.Terminal_Illness
                      ? patient.Terminal_Illness
                      : "Not recorded"
                  }
                />
              </ColumnTwo>
            </Grid>
          </Render>
        </ReportContainer>
      </Section>

      {/* Attendance and Relatives */}
      <Section>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Attendance and Relatives"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Grid>
              <ColumnOne>
                <FieldData
                  field="Police Attendance"
                  data={patient.Police ? patient.Police : "Not recorded"}
                />
                <FieldData
                  field="Details of Police involvement"
                  data={
                    patient.Terminal_Additional
                      ? patient.Terminal_Additional
                      : "Not recorded"
                  }
                />
              </ColumnOne>

              <ColumnTwo>
                <FieldData
                  field="GP Attendance"
                  data={patient.GP ? patient.GP : "Not recorded"}
                />
                <FieldData
                  field="Relatives Attendance"
                  data={patient.Relative ? patient.Relative : "Not recorded"}
                />
              </ColumnTwo>

              <ColumnThree>
                <FieldData
                  field="Bereavement Leaflet provided and consider religious support"
                  data={
                    patient.DoD_Leaflet ? patient.DoD_Leaflet : "Not recorded"
                  }
                />
                <FieldData
                  field="Did the Patient have a known learning disability? If yes, inform support centre"
                  data={
                    patient.DoD_Disability
                      ? patient.DoD_Disability
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
  //#endregion /dodRender = Diagnosis of Death Report

  return <Container>{dodRender}</Container>;
}
