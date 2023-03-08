import React from "react";

// any type should be replaced with correct type
type Props = {
  placeholder?: string;
  value?: any;
  action?: any;
};

const AddressInput = ({ placeholder, value, action }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(data) => action(data.target.value)}
      value={value}
      className="flex-grow bg-slate-600 px-8 py-3 font-bold rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
  );
};

export default AddressInput;
