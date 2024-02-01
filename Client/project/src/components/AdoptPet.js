import React, { useState } from "react";
import AdoptAPetAndFindYourNew from "./AdoptAPetAndFindYourNew";
import styles from "./AdoptPet.module.css";

const AdoptPet = () => {
  const [pets, setPets] = useState([
    {
      type: "Dog",
      breeds: [
        { id: 1, name: "German Shepherd" },
        { id: 2, name: "Golden Retriever" },
        { id: 3, name: "Labrador Retriever" },
        { id: 4, name: "Bulldog" },
        { id: 5, name: "Poodle" }
      ]
    },
    {
      type: "Cat",
      breeds: [
        { id: 6, name: "Persian" },
        { id: 7, name: "Siamese" },
        { id: 8, name: "Maine Coon" },
        { id: 9, name: "Ragdoll" },
        { id: 10, name: "Sphynx" }
      ]
    },
    {
      type: "Bird",
      breeds: [
        { id: 11, name: "Canary" },
        { id: 12, name: "Budgerigar" },
        { id: 13, name: "Cockatiel" },
        { id: 14, name: "Lovebird" },
        { id: 15, name: "Parrot" }
      ]
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBreeds = pets.reduce((acc, pet) => {
    const filtered = pet.breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return acc.concat(filtered.map((b) => ({ ...b, type: pet.type })));
  }, []);

  return (
    <div className={styles.adoptPetContainer}>
      <header className={styles.frameE}>
        <div className={styles.rectangleF}>
          <img
            className={styles.rectangleFChild}
            loading="eager"
            alt=""
            src="/rectangle-14.svg"
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
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <div className={`${styles.searchResults} active`}>
                  <ul>
                    {filteredBreeds.map((breed) => (
                      <li
                        key={breed.id}
                        className={styles.petItem}
                        onClick={() => console.log(`Selected: ${breed.name}`)}
                      >
                        {`${breed.name} - ${breed.type}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdoptPet;
