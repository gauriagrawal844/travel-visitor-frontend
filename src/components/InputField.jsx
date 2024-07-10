import React from "react";

const InputField = (props) => {
  const { label, type, required, name, onChange, value } = props;

  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={label}
          name={name}
          type={type}
          required={required}
          autoComplete={label}
          onChange={onChange}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
        />
      </div>
    </div>
  );
};

export default InputField;
