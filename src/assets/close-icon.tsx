import React from "react";

// TODO: Refactor this to be a reusable component
// We can have one Icon component with interface for all of the available icons
// In this way, we can always use <Icon /> where we need it and use only prop to decide which icon is shown
// We can also pass className prop to Icon component to style it when needed
const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default CloseIcon;
