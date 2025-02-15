
function Inputtype({ labeltext, labelfor,value, onChange, name, Inputtype }) {
  return (
    <>
      <div className="space-y-4">
        <label
          htmlFor={labelfor}
          className="block text-lg font-medium text-gray-700"
        >
          {labeltext}
        </label>
        <input
          type={Inputtype}
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

export default Inputtype;

