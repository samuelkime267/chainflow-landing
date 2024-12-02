import React from "react";

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // You can define custom props here, if needed
  // customProp?: string;
  btnType?: "primary" | "secondary";
}

export default function Button({
  btnType,
  className,
  children,
  ...props
}: buttonProps) {
  return (
    <button className={`${btnType} ${className}`} {...props}>
      {children}
    </button>
  );
}
