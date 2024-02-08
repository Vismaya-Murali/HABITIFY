import React, { useState } from 'react';
import "./pos.css"

const AffirmationBoxes = () => {
  const affirmations = [
    require("./ASSETS/aff-1.jpeg"),
    require("./ASSETS/aff-2.jpeg"),
    require("./ASSETS/aff-3.jpeg"),
    require("./ASSETS/aff-4.jpeg"),
    require("./ASSETS/aff-5.jpeg"),
    require("./ASSETS/aff-6.jpeg"),
    require("./ASSETS/aff-7.jpeg"),
    require("./ASSETS/aff-8.jpeg"),
    require("./ASSETS/aff-9.jpeg"),
    require("./ASSETS/aff-10.jpeg"),

  ];

  const backgroundImages = [
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
    require("./ASSETS/dog.jpeg"),
  ];

  const [openedBox, setOpenedBox] = useState(null);

  const handleBoxClick = (boxIndex) => {
    setOpenedBox(boxIndex === openedBox ? null : boxIndex);
  };

  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 2; i++) {
      const row = [];
      const columnCount = i === 0 ? 5 : 4;

      for (let j = 0; j < columnCount; j++) {
        const boxIndex = i * 5 + j;
        row.push(
          <div
            key={boxIndex}
            className={`box${openedBox === boxIndex ? ' clicked' : ''}`}
            onClick={() => handleBoxClick(boxIndex)}>
            <img className="background-image" src={backgroundImages[boxIndex]} alt={`background-${boxIndex}`} />
            <img className="affirmation-image" src={affirmations[boxIndex]} alt={`affirmation-${boxIndex}`} />
          </div>
        );
      }

      boxes.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }

    return boxes;
  };

  return (
    <body className="pos">
    <div className="pospage" >
      <h1 className='shadow' style={{ textAlign: 'center' }}>Positive Affirmations</h1>
      <div className="container" id="affirmationContainer">
        {generateBoxes()}
      </div>
    </div>
    </body>
  );
};

export default AffirmationBoxes;
