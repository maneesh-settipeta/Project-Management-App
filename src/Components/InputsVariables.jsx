import { forwardRef } from "react";

const Input = forwardRef(function InputVariables(
  { label, textArea, type },
  ref
) {
  return (
    <>
      <p className="flex flex-col ">
        <label className="font-serif my-1 mx-1 text-lg"> {label} </label>
        {textArea ? (
          <textarea
            ref={ref}
            className="outline-offset-2 border border-black/50 rounded-md p-2 shadow-xl mx-2"
          />
        ) : (
          <input
            ref={ref}
            type={type}
            className=" outline-offset-2 border border-black/50 rounded-md p-2 shadow-md mx-2"
          />
        )}
      </p>
    </>
  );
});

export default Input;
