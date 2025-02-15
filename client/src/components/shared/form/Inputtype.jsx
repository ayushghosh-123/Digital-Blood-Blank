function InputType({ labelText, labelFor, value, onChange, name, inputType }) {
  return (
    <>
      <div className="space-y-4">
        <label
          htmlFor={labelFor}
          className="block text-lg font-medium text-gray-700"
        >
          {labelText}
        </label>
        <input
          type={inputType}
          placeholder="Enter your email"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default InputType;

