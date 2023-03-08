import React from "react";

// any type should be replaced with correct type
type Props = {
  placeholder?: string;
  value?: any;
  action?: any;
};

const AddressInput = ({ placeholder, value, action }: Props) => {
  return <input type="text" placeholder={placeholder} onChange={(data) => action(data.target.value)} value={value} />;
};

export default AddressInput;
