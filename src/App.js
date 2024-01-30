import React, { useState } from "react";
import "./App.css";
import { List } from "./component/list";

const getSelections = (type, numOfElements) => {
  const result = [];
  for (let i = 1; i <= numOfElements; i++) {
    result.push({
      id: i,
      url: `https://character-customization.netlify.app/character/${type}/${i}.png`,
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
  console.log(bodySelection, 1);

  return (
    <div className="container">
      <div>
        <p>CHARACTER</p>
        <h1>🛠️CUSTOMIZATION🛠️</h1>
        <h2 id="divider"></h2>
      </div>
      <div className="main">
        <div className="leftview"></div>
        <div className="rightview">
          <List
            selected={bodySelection}
            onChange={setBodySelection}
            heading="Body"
            data={getSelections("body", 30)}
          />

          <List
            selected={eyeSelection}
            onChange={setEyeSelection}
            heading="Eye"
            data={getSelections("eyebrows", 30)}
          />
          <List
            selected={hairSelection}
            onChange={setHairSelection}
            heading="Hair"
            data={getSelections("hair", 30)}
          />
          <List
            selected={mouthSelection}
            onChange={setMouthSelection}
            heading="Mouth"
            data={getSelections("mouths", 30)}
          />
          <List
            selected={eyeBrowsSelection}
            onChange={setEyeBrowsSelection}
            heading="Eyebrows"
            data={getSelections("eyebrows", 30)}
          />
          <List
            selected={glassesSelection}
            onChange={setGlassesSelection}
            heading="Glasses"
            data={getSelections("accessories/glasses", 30)}
          />
          <List
            selected={clothesL1Selection}
            onChange={setClothesL1Selection}
            heading="Clothing(L1)"
            data={getSelections("clothes/layer_1", 30)}
          />
          <List
            selected={clothesL2Selection}
            onChange={setClothesL2Selection}
            heading="Clothing(L2)"
            data={getSelections("clothes/layer_2", 30)}
          />
          <List
            selected={clothesL3Selection}
            onChange={setClothesL3Selection}
            heading="Clothing(L3)"
            data={getSelections("clothes/layer_3", 30)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
