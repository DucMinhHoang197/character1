import React, { useState } from "react";
import "./App.css";
import { List } from "./component/list";
import Avatar from "./component/leftview";

const getSelections = (type, numOfElements) => {
  const result = [];
  for (let i = 1; i <= numOfElements; i++) {
    result.push({
      id: i,

      url: `./character/${type}/${i}.png`,
    });
  }
  return result;
};

function App() {
  const [bodySelection, setBodySelection] = useState(0);
  const [eyeSelection, setEyeSelection] = useState(0);
  const [hairSelection, setHairSelection] = useState(0);
  const [mouthSelection, setMouthSelection] = useState(0);
  const [eyeBrowsSelection, setEyeBrowsSelection] = useState(0);
  const [glassesSelection, setGlassesSelection] = useState(0);
  const [clothesL1Selection, setClothesL1Selection] = useState(0);
  const [clothesL2Selection, setClothesL2Selection] = useState(0);
  const [clothesL3Selection, setClothesL3Selection] = useState(0);
  const generateRandomSelections = () => {
    setBodySelection(Math.floor(Math.random() * 17) + 1);
    setEyeSelection(Math.floor(Math.random() * 24) + 1);
    setHairSelection(Math.floor(Math.random() * 73) + 1);
    setMouthSelection(Math.floor(Math.random() * 24) + 1);
    setEyeBrowsSelection(Math.floor(Math.random() * 15) + 1);
    setGlassesSelection(Math.floor(Math.random() * 17) + 1);
    setClothesL1Selection(Math.floor(Math.random() * 5) + 1);
    setClothesL2Selection(Math.floor(Math.random() * 5) + 1);
    setClothesL3Selection(Math.floor(Math.random() * 9) + 1);
  };

  return (
    <div className="container">
      <div>
        <p>CHARACTER</p>
        <h1>🛠️CUSTOMIZATION🛠️</h1>
        <h2 id="divider">Character Customization Options</h2>
      </div>
      <div className="main">
        <div className="leftview">
          <Avatar bodySelection={bodySelection} />
          <Avatar eyeSelection={eyeSelection} />
          <Avatar hairSelection={hairSelection} />
          <Avatar mouthSelection={mouthSelection} />
          <Avatar eyeBrowsSelection={eyeBrowsSelection} />
          <Avatar glassesSelection={glassesSelection} />
          <Avatar clothesL1Selection={clothesL1Selection} />
          <Avatar clothesL2Selection={clothesL2Selection} />
          <Avatar clothesL3Selection={clothesL3Selection} />
        </div>
        <button className="button" onClick={generateRandomSelections}>
          Random
        </button>
        <div className="rightview">
          <List
            selected={bodySelection}
            onChange={setBodySelection}
            heading="Body"
            data={getSelections("body", 17)}
          />

          <List
            selected={eyeSelection}
            onChange={setEyeSelection}
            heading="Eye"
            data={getSelections("eyes", 24)}
          />
          <List
            selected={hairSelection}
            onChange={setHairSelection}
            heading="Hair"
            data={getSelections("hair", 73)}
          />
          <List
            selected={mouthSelection}
            onChange={setMouthSelection}
            heading="Mouth"
            data={getSelections("mouths", 24)}
          />
          <List
            selected={eyeBrowsSelection}
            onChange={setEyeBrowsSelection}
            heading="Eyebrows"
            data={getSelections("eyebrows", 15)}
          />
          <List
            selected={glassesSelection}
            onChange={setGlassesSelection}
            heading="Glasses"
            data={getSelections("accessories/glasses", 17)}
          />
          <List
            selected={clothesL1Selection}
            onChange={setClothesL1Selection}
            heading="Clothing(L1)"
            data={getSelections("clothes/layer_1", 5)}
          />
          <List
            selected={clothesL2Selection}
            onChange={setClothesL2Selection}
            heading="Clothing(L2)"
            data={getSelections("clothes/layer_2", 5)}
          />
          <List
            selected={clothesL3Selection}
            onChange={setClothesL3Selection}
            heading="Clothing(L3)"
            data={getSelections("clothes/layer_3", 9)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
