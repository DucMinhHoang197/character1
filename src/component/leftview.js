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
          alt=""
          src={`./character/body/${bodySelection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/eyes/${eyeSelection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/hair/${hairSelection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/eyebrows/${eyeBrowsSelection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/mouths/${mouthSelection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/accessories/glasses/${glassesSelection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/clothes/layer_1/${clothesL1Selection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/clothes/layer_2/${clothesL2Selection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
      <div>
        <img
          alt=""
          src={`./character/clothes/layer_3/${clothesL3Selection}.png`}
          width="300px"
          style={{ position: "absolute", zIndex: 0 }}
        />
      </div>
    </div>
  );
}
export default Avatar;
