import React, { useState, useEffect, useRef } from "react";

const IMAGES = {
  JS: require("./images/js.png"),
  REACT: require("./images/react.png"),
  C_SHARP: require("./images/csharp.png"),
  FLUTTER: require("./images/flutter.png"),
  ARROW: require("./images/arrow.png"),
};

const SKILLS = [
  {
    name: "Javascript",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit se",
    color: "#FFDA3E",
    image: IMAGES.JS,
  },
  {
    name: "Flutter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit se",
    color: "#61DAFB",
    image: IMAGES.FLUTTER,
  },
  {
    name: "C#",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit se",
    color: "#38008C",
    image: IMAGES.C_SHARP,
  },
  {
    name: "React",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit se",
    color: "#61DAFB",
    image: IMAGES.REACT,
  },
];

const skillList = [...SKILLS, ...SKILLS];
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const activeSkill = skillList[currentIndex];

  useEffect(() => {
    const scrollContainer = carouselRef.current;

    const scrollInterval = setInterval(() => {
      if (currentIndex < SKILLS.length - 1) {
        scrollContainer.style.scrollBehavior = "smooth";
        setCurrentIndex((prevIndex) => {
          const newValue = prevIndex + 1;
          scrollContainer.scrollLeft = newValue * 350;
          return newValue;
        });
      } else {
        scrollContainer.style.scrollBehavior = "auto";
        setCurrentIndex(0);
        scrollContainer.scrollLeft = 0;
      }
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, [currentIndex, skillList]);

  const activeBg = {
    backgroundColor: activeSkill.color,
  };

  return (
    <div className="container">
      <div className="gradient_bg" style={activeBg} />

      <ul>
        <li>contact me</li>
        <li>about me</li>
        <li>projects</li>
        <li>pricing</li>
      </ul>

      <div className="desc">
        <p className="desc-title">My Skills</p>
        <p className="desc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>

        <div className="click-section">
          <button className="desc-btn" style={activeBg}>
            contact me
          </button>
          <button className="more">
            <img className="more-img" alt="arrow image " src={IMAGES.ARROW} />
            <p className="more-text">see more</p>
          </button>
        </div>
      </div>

      <div className="carousel-container" ref={carouselRef}>
        {skillList.map((item, index) => {
          return (
            <button key={index} onClick={() => setCurrentIndex(index)}>
              <div
                className={`carousel-card ${
                  currentIndex === index ? "active" : "inactive"
                }`}
              >
                <img
                  style={
                    {
                      // filter: `drop-shadow(5px 5px 30px ${item.color})`,
                    }
                  }
                  className="small-img"
                  src={item.image}
                  alt={item.name + ".png"}
                />
                <div className="desc-container">
                  <p className="center-title">{item.name}</p>
                  <p className="center-desc">{item.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
