function InputVariables({ label, textArea }) {
  return (
    <>
      <p className="flex flex-col ">
        <label className="font-serif my-1 mx-1 text-lg"> {label} </label>
        {textArea ? (
          <textarea className="outlineborder-2 border-gray-300 rounded-md p-2 shadow-md mx-2" />
        ) : (
          <input className="border-2 border-gray-300 rounded-md p-2 shadow-md mx-2" />
        )}
      </p>
    </>
  );
}

export default InputVariables;
