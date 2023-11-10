import "./style.css";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="intro-text">
          <div>
            <h1>Want to improve your health?</h1>
            <h3>Calculate your recommended daily calorie intake!</h3>
            <p>
              If you're having troubles losing maintaining or gaining weight
              access our calculator to get some help.{" "}
            </p>
            <button className="intro-button">Calculate Now</button>
          </div>
        </div>
        <div className="intro-image">
          <img src="src\assets\images\CALORIES.jpeg" alt="calories" />
        </div>
      </div>
    </>
  );
};

export default Intro;
