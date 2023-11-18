// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import bg1 from "./bg1.png";
import bg2 from "./bg2.png";
import bg3 from "./bg3.png";
import bg4 from "./bg4.png";
import bg5 from "./bg5.png";
import { motion } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

function App() {
  const images = [bg1, bg2, bg3, bg4, bg5];

  const Images = [
    {
      img: bg1,
      text1: "Mercury",
      text2:
        "The only planet in our Solar System that has no substantial atmosphere",
    },
    {
      img: bg2,
      text1: "Venus",
      text2:
        "Thick atmosphere that traps heat in a runaway greenhouse effect providing water",
    },
    {
      img: bg3,
      text1: "Mars",
      text2:
        "It has very weak gravity. Gravity on Mars is 37% less than on Earth also known as Red planet",
    },
    {
      img: bg4,
      text1: "Saturn",
      text2:
        "The combination of methane with storms produces a shower of diamonds & stones",
    },
    {
      img: bg5,
      text1: "Kepler-11e",
      text2:
        "Ringed Earth-like planet, known as a purple planet, is located outside the Milky Way Galaxy.",
    },
  ];

  const [currIdx, setCurrIdx] = useState(0);
  const [currImg, setCurrImg] = useState(Images[0].img);
  const [currtext1, setCurrText1] = useState(Images[0].text1);
  const [currtext2, setCurrText2] = useState(Images[0].text2);

  const addanimation = () => {
    const inner = document.querySelector(".App-logo");
    const inner2 = document.querySelector(".App-logo2");
    const inner3 = document.querySelector(".App-logo3");
    const text = document.querySelector(".text");
    const onlytext = document.querySelector(".only-text");
    onlytext.classList.remove("text-animation2");
    inner.classList.add("inner-animation");
    inner3.classList.add("inner-animation3");
    inner2.classList.add("inner-animation2");
    // onlytext.classList.add("text-animation1");

    setTimeout(() => {
      inner.classList.add("inner-animation-exit");
      inner3.classList.add("inner-animation3-exit");
      inner2.classList.add("inner-animation2-exit");
      text.classList.add("text-animation-exit");
      onlytext.classList.remove("text-animation1");
    }, 800);

    setTimeout(() => {
      if (currIdx < images?.length - 1) {
        setCurrIdx(currIdx + 1);
        setCurrImg(Images[currIdx + 1].img);
        setCurrText1(Images[currIdx + 1].text1);
        setCurrText2(Images[currIdx + 1].text2);
        onlytext.classList.add("text-animation1");
      } else {
        setCurrIdx(0);
        setCurrImg(Images[0].img);
        setCurrText1(Images[0].text1);
        setCurrText2(Images[0].text2);
        onlytext.classList.add("text-animation1");
      }
    }, 1200);

    setTimeout(() => {
      inner.classList.remove("inner-animation-exit");
      inner3.classList.remove("inner-animation3-exit");
      inner2.classList.remove("inner-animation2-exit");
      text.classList.remove("text-animation-exit");
    }, 1200);
  };

  const prev = () => {
    const inner = document.querySelector(".App-logo");
    const inner2 = document.querySelector(".App-logo2");
    const inner3 = document.querySelector(".App-logo3");
    const text = document.querySelector(".text");
    const onlytext = document.querySelector(".only-text");
    onlytext.classList.remove("text-animation1");
    inner.classList.add("inner-animation");
    inner3.classList.add("inner-animation3");
    inner2.classList.add("inner-animation2");
    // onlytext.classList.add("text-animation2");

    setTimeout(() => {
      inner.classList.add("inner-animation-exit");
      inner3.classList.add("inner-animation3-exit");
      inner2.classList.add("inner-animation2-exit");
      text.classList.add("text-animation-exit");
      onlytext.classList.remove("text-animation2");
    }, 800);

    setTimeout(() => {
      if (currIdx > 0) {
        setCurrIdx(currIdx - 1);
        setCurrImg(Images[currIdx - 1].img);
        setCurrText1(Images[currIdx - 1].text1);
        setCurrText2(Images[currIdx - 1].text2);
        onlytext.classList.add("text-animation2");
      } else {
        setCurrIdx(0);
        setCurrImg(Images[0].img);
        setCurrText1(Images[0].text1);
        setCurrText2(Images[0].text2);
        onlytext.classList.add("text-animation2");
      }
    }, 1200);

    setTimeout(() => {
      inner.classList.remove("inner-animation-exit");
      inner3.classList.remove("inner-animation3-exit");
      inner2.classList.remove("inner-animation2-exit");
      text.classList.remove("text-animation-exit");
    }, 1200);
  };

  return (
    <>
      <div className="App">
        <div
          className="App-logo"
          style={{
            height: "500px",
            width: "500px",
            opacity: 1,
            borderRadius: "50%",
            backgroundImage: `url(${currImg})`,
            backgroundPosition: "center",
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1528px",
            zIndex: 4,
          }}
        ></div>

        <div
          className="App-logo2"
          style={{
            height: "888px",
            width: "888px",
            opacity: 1,
            borderRadius: "50%",
            backgroundImage: `url(${currImg})`,
            backgroundPosition: "center",
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1528px",
            zIndex: 3,
          }}
        ></div>

        <div
          className="App-logo3"
          style={{
            height: "1528px",
            width: "1528px",
            opacity: 1,
            borderRadius: "50%",
            backgroundImage: `url(${currImg})`,
            backgroundPosition: "center",
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1528px",
            zIndex: 2,
          }}
        ></div>
        <div className="text">
          <div className="only-text">
            <p
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#EBEBEB",
                fontFamily: "Open Sans",
              }}
            >
              {currtext1}
            </p>
            <p
              style={{
                fontSize: "28px",
                fontWeight: 400,
                color: "#EBEBEB",
                fontFamily: "Open Sans",
              }}
            >
              {currtext2}
            </p>
          </div>
        </div>
        {currIdx < Images.length - 1 && (
          <button
            className="button"
            style={{
              position: "absolute",
              bottom: 120,
              right: 120,
              zIndex: 7,
            }}
            onClick={addanimation}
          >
            <ArrowRight2 />
          </button>
        )}
        {currIdx > 0 && (
          <button
            className="button"
            style={{
              position: "absolute",
              bottom: 120,
              left: 120,
              zIndex: 7,
            }}
            onClick={prev}
          >
            <ArrowLeft2 />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
