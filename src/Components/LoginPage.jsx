import { useRef } from "react";
import { useContext } from "react";
import { CreateContext } from "../Store/Store-Projects-Data";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const { handleUserLoginPage } = useContext(CreateContext);

  const userId = useRef(null);
  const userPassword = useRef(null);

  function handleUserLogin() {
    const username = userId.current.value;
    const userPass = userPassword.current.value;
    if (username === "" || userPass === "") {
      alert("Please Enter Login Credentials");
    }

    handleUserLoginPage(username, userPass);
  }

  return (
    <>
      <div className="bg-slate-200 h-screen flex items-center justify-center">
        <div className="bg-[#7FB5FF] p-7 rounded-md ">
          <div>
            <p className="flex flex-col py-2">
              <label className="text-1xl font-medium "> UserId</label>
              <input
                className="max-w-fit p-3 border   border-none outline-none rounded-md"
                ref={userId}
                placeholder="Please Enter your ID"
              ></input>
            </p>
          </div>
          <div>
            <p className="flex flex-col py-3 ">
              <label className="text-1xl font-medium ">Password</label>
              <input
                className="max-w-fit p-3 border  border-none outline-none rounded-md"
                ref={userPassword}
                placeholder="Please Enter Password"
              ></input>
            </p>
          </div>
          <div className="flex justify-end ">
            <button
              className="bg-slate-200 p-2 text-gray-350 text-lg hover:font-medium rounded-md   hover:text-black hover:shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
              onClick={handleUserLogin}
              to="/Login"
            >
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
