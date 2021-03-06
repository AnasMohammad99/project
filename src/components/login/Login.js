import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <main className="login-form form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="كلمة المرور"
          />
          <label for="floatingPassword">كلمة المرور</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-2 mb-3 text-muted">&copy; 2017–2021</p>
      </main>
    </div>
  );
};

export default Login;
