import React, { useState } from "react";
import AdoptAPetAndFindYourNew from "./AdoptAPetAndFindYourNew";
import ReactSearchBox from "react-search-box";
import styles from "./AdoptPet.module.css";

const AdoptPet = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (record) => {
    console.log("Performing search for:", record.value);
    // You can add further logic to handle the search results or navigation
    navigateToSearchResult(record.key);
  };

  const handleInputChange = (value) => {
    setSearchQuery(value);
    // You can also call your search function here if you want real-time suggestions
  };

  const navigateToSearchResult = (resultKey) => {
    // Implement your navigation logic here, for example:
    window.location.href = `/search/${resultKey}`;
  };

  // Sample data for dogs, cats, and birds
  const data = [
    { key: "golden", value: "Golden Retriever" },
    { key: "beagle", value: "Beagle" },
    { key: "siamese", value: "Siamese Cat" },
    { key: "persian", value: "Persian Cat" },
    { key: "parrot", value: "Parrot" },
    { key: "canary", value: "Canary" },
    { key: "germanshepherd", value: "German Shepherd" },
    { key: "poodle", value: "Poodle" },
    { key: "mainecoon", value: "Maine Coon Cat" },
    { key: "ragdoll", value: "Ragdoll Cat" },
    { key: "cockatiel", value: "Cockatiel" },
    { key: "budgerigar", value: "Budgerigar" },
    { key: "bulldog", value: "Bulldog" },
    { key: "dachshund", value: "Dachshund" },
    { key: "bengal", value: "Bengal Cat" },
    { key: "pigeon", value: "Pigeon" },
    // Add more entries as needed
  ];

  return (
    <div className={styles.adoptPetContainer}>
      <header className={styles.frameE}>
        <div className={styles.rectangleF}>
          <img
            className={styles.rectangleFChild}
            loading="eager"
            alt=""
            src="/rectangle-23.png"
          />
          <div className={styles.adoptButtonGroup}>
            <div className={styles.infoIconsContainer}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/ellipse-8@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.adoptButton}>
          <AdoptAPetAndFindYourNew />
          <div className={styles.searchbar}>
            <div className={styles.content}>
              <div className={styles.magnifyingglass}>
                <div className={styles.magnifyingglass1}>􀊫</div>
              </div>
              <div className={styles.searchbarMain}>
              <ReactSearchBox
                  placeholder="Search..."
                  value={searchQuery}
                  data={data}
                  callback={(record) => handleSearch(record)}
                  onChange={(value) => handleInputChange(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdoptPet;
