import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.intelligentAndCuriousOption}>
      <div className={styles.timeWillingnessLabel}>
        <div className={styles.bMinimalGroomingEffortLabe}>
          <div className={styles.whatsYourPerfectContainer}>
            <p className={styles.whatsYourPerfect}>What’s your Perfect Pet?</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.blankLine2}>&nbsp;</p>
          </div>
          <div className={styles.whatIsYourPerfectPetQuest}>
            <div className={styles.frameSizeLabel}>
              <div className={styles.preferredActivitiesFrame}>
                <div className={styles.howWouldYouContainer}>
                  <p className={styles.howWouldYou}>
                    1.How would you describe your ideal weeklelnd activity?
                  </p>
                </div>
                <h1 className={styles.findYourMate}>Find Your Mate</h1>
              </div>
            </div>
            <div className={styles.sizePreferenceFrame}>
              <div className={styles.aoutdoorAdventuresAnd}>
                A.Outdoor adventures and walks in park
              </div>
              <div className={styles.bcozyingUpWith}>
                B.Cozying up with a good look or movie
              </div>
              <div className={styles.cexploringNatureOr}>
                C.Exploring Nature or going oon a hike
              </div>
            </div>
          </div>
        </div>
        <div className={styles.petSizeSelection}>
          <div className={styles.whatSizeOfContainer}>
            <p className={styles.whatSizeOf}>2.What size of pet you prefer ?</p>
          </div>
          <div className={styles.alargeAndEnergetic}>A.Large and energetic</div>
          <div className={styles.bsmallAndCuddly}>B.Small and cuddly</div>
          <div className={styles.cmediumSizedAndGraceful}>
            C.Medium-sized and graceful
          </div>
        </div>
        <div className={styles.whatTypeOfContainer}>
          <p className={styles.whatTypeOf}>
            3.What type of personality do you appreciate in a pet?
          </p>
        </div>
        <div className={styles.aLoyalAndPlayful}>
          <div className={styles.aloyalAndPlayful}>A.Loyal and Playful</div>
        </div>
        <div className={styles.aLoyalAndPlayful1}>
          <div className={styles.bindependentAndMysterious}>
            B.Independent and mysterious
          </div>
        </div>
        <div className={styles.aLoyalAndPlayful2}>
          <div className={styles.cintelligentAndCurious}>
            C.Intelligent and curious
          </div>
        </div>
        <div className={styles.aLoyalAndPlayful3}>
          <div className={styles.howMuchTimeContainer}>
            <p className={styles.howMuchTime}>
              4.How much time are you willing to spend on pet grooming ?
            </p>
          </div>
          <div className={styles.aiEnjoyGrooming}>
            A.I enjoy grooming and spending time with my pet
          </div>
          <div className={styles.bminimalGroomingEffort}>
            B.Minimal grooming effort
          </div>
          <div className={styles.ciDontMind}>
            C.I dont mind regular grooming session
          </div>
        </div>
        <div className={styles.yourIdealPetContainer}>
          <p className={styles.yourIdealPet}>
            5.Your Ideal pet would be known for... ?
          </p>
        </div>
        <div className={styles.aLoyalAndPlayful4}>
          <div
            className={styles.aprotectingTheFamily}
          >{`A.Protecting the family and being a great companion `}</div>
        </div>
        <div className={styles.aLoyalAndPlayful5}>
          <div className={styles.bbeingAffectionateAnd}>
            B.Being affectionate and a great lap warmer
          </div>
        </div>
        <div className={styles.aLoyalAndPlayful6}>
          <div
            className={styles.cdisplayingColourfulPlumage}
          >{`C.Displaying colourful plumage and singing beautiful tunes `}</div>
        </div>
        <div className={styles.aLoyalAndPlayful7}>
          <div className={styles.whatsYourOpinionContainer}>
            <p className={styles.whatsYourOpinion}>
              6.What’s your opinion on training pets ?
            </p>
          </div>
          <div className={styles.aiEnjoyTraining}>
            A.I enjoy training the teaching tricks
          </div>
          <div className={styles.biPreferA}>
            B.I prefer a pet that is more independent
          </div>
          <div className={styles.ciLikeA}>
            C.I like a pet that can learn and mimic sounds
          </div>
        </div>
      </div>
      <div className={styles.quietEnvironment}>
        <div className={styles.whenItComesContainer}>
          <p className={styles.whenItComes}>
            7.When it comes to noise level you prefer.. ?
          </p>
        </div>
        <div className={styles.barkingOrQuiet}>
          <div className={styles.asomeBarkingIs}>
            A.Some barking is fine, its part of fun
          </div>
        </div>
        <div className={styles.barkingOrQuiet1}>
          <div className={styles.baQuietAnd}>
            B.a quiet and serene environment
          </div>
        </div>
        <div className={styles.barkingOrQuiet2}>
          <div className={styles.cenjoyingTheSounds}>
            C.Enjoying the sounds of chirping and singing
          </div>
        </div>
      </div>
      <div className={styles.largeFilledEnabledButton}>
        <button className={styles.selectlargefilledenabled}>
          <div className={styles.buttonLargeFilledEnab}>
            <div className={styles.label}>
              <div className={styles.label1}>FIND YOUR PET</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
