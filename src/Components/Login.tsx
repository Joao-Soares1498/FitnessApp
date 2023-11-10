import "./style.css";

const Login = () => {
  return (
    <>
      <div className="loginForm   col-6">
        <div className="formTitle">Login</div>
        <div className="row g-3 align-items-center">
          <div className="col-2">
            <label htmlFor="inputEmail" className="col-form-label">
              Email
            </label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-2">
            <label htmlFor="inputPassword" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
