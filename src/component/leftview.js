import React from "react";

function Avatar({
  bodySelection,
  eyeSelection,
  hairSelection,
  mouthSelection,
  eyeBrowsSelection,
  glassesSelection,
  clothesL1Selection,
  clothesL2Selection,
  clothesL3Selection,
}) {
  return (
    <div>
      <div>
        <img
          src={`./character/body/${bodySelection}.png`}
          width="300px"
          z-index="0"
        />
      </div>
      <div>
        <img
          src={`./character/eyes/${eyeSelection}.png`}
          width="300px"
          z-index="2"
        />
      </div>
    </div>
  );
}
export default Avatar;
