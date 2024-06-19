import { useRef } from "react";
import "./Login.css";

function Login({ isLogin }) {
  const usernameinput = useRef(null);
  const passwordinput = useRef(null);

  const handleLogin = () => {
    const username = usernameinput.current.value;
    const password = passwordinput.current.value;

    isLogin(username, password);
  };

  return (
    <div>
      <div className="loginMainBackground">
        <div className="userNamePasswordContainer">
          <form onSubmit={handleLogin}>
            <div className="">
              <label>
                Username:
                <input
                  type="text"
                  ref={usernameinput}
                  className="inputStyle"
                  placeholder="Please enter username"
                ></input>
              </label>
            </div>
            <div>
              <label>
                password:
                <input
                  type="password"
                  ref={passwordinput}
                  className="inputStyle"
                  placeholder="Please enter password"
                ></input>
              </label>
            </div>
            <div>
              <button type="submit" className="buttonStyleLogin">
                {" "}
                Login{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
