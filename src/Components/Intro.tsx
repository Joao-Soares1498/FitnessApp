import "/src/assets/style.css";

const Intro = () => {
  return (
    <>
      <div className="mycontainer">
        <div className="intro-title">
          <div>
            <h1>Here you can start improving your life.</h1>
          </div>
        </div>
        <div className="intro-text">
          Are you having troubles with your weight? Explore our page to get some
          help.
        </div>
        <div className="intro-button">
          <button className="intro-button">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
