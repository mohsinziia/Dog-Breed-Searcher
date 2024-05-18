import React from "react";

function Container({ children, className, ...props }) {
  return (
    <div
      className={`grid justify-center justify-items-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
