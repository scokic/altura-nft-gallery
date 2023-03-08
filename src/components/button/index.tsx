import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
  className?: string;
};

const Button = ({ label, onClick, type = "button", disabled, className }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-8 py-3 inline-block cursor-pointer rounded-3xl text-white bg-slate-800 font-bold placeholder-gray-400 disabled:cursor-not-allowed disabled:opacity-30 ${className}}`}
    >
      {label}
    </button>
  );
};

export default Button;
