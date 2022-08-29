import React from 'react';

interface IEmProps {
  children: React.ReactNode;
}

export const Em = ({ children, }: IEmProps) => {
  return (
    <>
      <em>{children}</em>
    </>
  );
};
