import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
};

const Button = ({ label, onClick, type = "button" }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="px-4 py-2 border inline-block border-blue-600 cursor-pointer rounded"
    >
      {label}
    </button>
  );
};

export default Button;
