import React from 'react';

const images = [
    "./images/IMG-20210323-WA0000.jpg",
    "./images/IMG-20210323-WA0001.jpg",
    "./images/IMG-20211217-WA0000.jpg",
    "./images/IMG-20211217-WA0012.jpg"
]

function App() {
  return (
    <div className="container">
        <div className="left">
            <div className="left_1">
                {
                    images.map((image, i) => {
                       return <div className="img_wrap" key={i}>
                            <img src={image} alt="" />
                        </div>
                    })
                }
            </div>
            <div className="left_2">
                <img src={images[0]} alt="" />.
            </div>
        </div>
        <div className="right">

        </div>
    </div>
  );
}

export default App;
