import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  //extends HTMLAttributes<HTMLButtonElement>
  children: ReactNode;
  variant: 'primary' | 'secondary';
}
export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      {...props}
      style={{ backgroundColor: variant === 'primary' ? 'gray' : 'green' }}
    >
      {children}
    </button>
  );
};
