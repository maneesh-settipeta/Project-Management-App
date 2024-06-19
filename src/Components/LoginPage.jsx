import { useRef } from "react";

function LoginPage({ onSendUserData }) {
  const userId = useRef(null);
  const userPassword = useRef(null);

  function handleUserLogin() {
    const username = userId.current.value;
    const userPass = userPassword.current.value;

    onSendUserData(username, userPass);
  }

  return (
    <>
      <div className="bg-slate-200 h-screen flex items-center justify-center">
        <div className="bg-sky-300 p-7 rounded-md ">
          <div>
            <p className="flex flex-col py-2">
              <label className="text-2xl font-medium "> UserId</label>
              <input
                className="max-w-fit p-3 border   border-none outline-none rounded-md"
                ref={userId}
                placeholder="Please Enter your ID"
              ></input>
            </p>
          </div>
          <div>
            <p className="flex flex-col py-3 ">
              <label className="text-2xl font-medium ">Password</label>
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