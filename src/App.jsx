import React, {useRef, useState} from 'react';
import ReactImageMagnify from 'react-image-magnify';
import "./App.css"

const images = [
    "https://images.pexels.com/photos/12640456/pexels-photo-12640456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11769686/pexels-photo-11769686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12624892/pexels-photo-12624892.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
]

function App() {
    const [img, setImg] = useState(images[0])
    const hoverHandler = (image, i) => {
        setImg(image)
        refs.current[i].classList.add("active");
        for (let j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j  ].classList.remove('active')
            }
        }
    }
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)){
            refs.current.push(el);
        }
    }
  return (
    <div className="container">
        <div className="left">
            <div className="left_1">
                {
                    images.map((image, i) => {
                       return <div className={i === 0 ? "img_wrap active" : "img_wrap"} key={i}
                       onMouseOver={() => hoverHandler(image, i)}
                       ref={addRefs}>
                            <img src={image} alt="" />
                        </div>
                    })
                }
            </div>
            <div className="left_2">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: img,
                    },
                    largeImage: {
                        src: img,
                        width: 1200,
                        height: 1800
                    }
                }} />
            </div>
        </div>
    </div>
  );
}

export default App;
