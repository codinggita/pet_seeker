import React, { useState, useEffect } from "react";
import axios from 'axios';
import PlaceholderHolder from "../components/PlaceholderHolder";

import DeleteAdoptionRecord from "../pages/DeleteAdoptionRecord"; // Import the DeleteAdoptionRecord component
import styles from "./AdoptFillForm.module.css";

const AdoptFillForm = () => {
  const [adoptionData, setAdoptionData] = useState([]);

  useEffect(() => {
    // Fetch the adoption data from the backend
    axios.get('http://localhost:5000/adoption')
      .then((response) => {
        setAdoptionData(response.data);
        console.log(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching adoption data:', error);
      });
  }, []);

  return (
    <div className={styles.adoptForm}>
      <main className={styles.formContainer}>
        <PlaceholderHolder
          group2="/paw-group.svg"
          button26Padding="var(--padding-xs) 0px 0px"
          frameDivGap="445px"
          propWidth="135px"
          propPadding="0px var(--padding-3xs)"
        />
        <section className={styles.rectangleParent}>
         
          <div className={styles.rectangleGroup}>
          
            <div className={styles.selectParent}>
              <div className={styles.select}>
             
              </div>
              
             
                <div className={styles.tellUsAboutContainer}>
                  <ul>
                    {adoptionData.map((adoption, index) => (
                      <li key={index} className={styles.tellUsAbout}>
                        <strong>Name:</strong> {adoption.name}<br />
                        <strong>Email:</strong> {adoption.email}<br />
                        <strong>Pet Preference:</strong> {adoption.petPreference}<br />
                        <strong>Adoption Reason:</strong> {adoption.adoptionReason}
                        {/* Include the DeleteAdoptionRecord component for each adoption record */}
                        <DeleteAdoptionRecord adoptionId={adoption._id} />
                        <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <p className={styles.blankLine3}>&nbsp;</p>
                  <p className={styles.blankLine4}>&nbsp;</p>
                  <p className={styles.blankLine5}>&nbsp;</p>
                  <p className={styles.blankLine6}>&nbsp;</p>
                      </li>
                    ))}
                  </ul>
             
                <div className={styles.value}>255 / 225</div>
              </div>
            </div>
          </div>
          <h1 className={styles.adoptAPet}> Adoption Details</h1>
        </section>
      </main>
      <img
        className={styles.adoptFormChild}
        loading="eager"
        alt=""
        src="/group-3.svg"
      />
    </div>
  );
};

export default AdoptFillForm;
