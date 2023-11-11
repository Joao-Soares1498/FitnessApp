import "/src/assets/style.css";

const Calculator = () => {
  return (
    <>
      <div className="mycontainer">
        <div className="calculator-text">
          <h1>
            The most important factor to improve your life is your diet. So we
            will start with calculating your daily calorie intake.
          </h1>
        </div>
        <div className="objective">
          <h2>Whats your objective?</h2>
          <div className="button-group">
            <button>Lose weigth</button>
            <button>Maintain weight</button>
            <button>Gain weight</button>
          </div>
        </div>
        <div className="userbodydata">
          <h2>What's your gender?</h2>
          <div className="button-group">
            <button>Male</button>
            <button>Female</button>
          </div>
          <div className="inputs">
            <h2>Age</h2>
            <div className="input">
              <input type="text" placeholder="" />
            </div>
            <h2>Height</h2>
            <div className="input">
              <input type="text" placeholder="cm" />
            </div>
            <h2>Weight</h2>
            <div className="input">
              <input type="text" placeholder="kg" />
            </div>
          </div>
          <div className="activity">
            <h2>How active are you weekly?</h2>
            <div className="button-group">
              <button>Sedentary</button>
              <button>1-2 Workouts</button>
              <button>3-4 Workouts</button>
              <button>5+ Workouts</button>
            </div>
          </div>
          <div className="yo">
            <button>Calculate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
