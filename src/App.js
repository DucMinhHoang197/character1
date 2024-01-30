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
  console.log(bodySelection);
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
          <List heading="Eye" data={getSelections("eyebrows", 30)} />
          <List heading="Hair" data={getSelections("hair", 30)} />
          <List heading="Mouth" data={getSelections("mouths", 30)} />
          <List heading="Eyebrows" data={getSelections("eyebrows", 30)} />
          <List
            heading="Glasses"
            data={getSelections("accessories/glasses", 30)}
          />
          <List
            heading="Clothing(L1)"
            data={getSelections("clothes/layer_1", 30)}
          />
          <List
            heading="Clothing(L2)"
            data={getSelections("clothes/layer_2", 30)}
          />
          <List
            heading="Clothing(L3)"
            data={getSelections("clothes/layer_3", 30)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
