import React from 'react';
import tw, { css } from 'twin.macro';

interface IStrongProps {
  children: React.ReactNode;
}

export const Strong = ({ children, }: IStrongProps) => {
  const strongStyle = css`
    ${tw` font-black `}
  `;
  return (
    <>
      <strong css={strongStyle}>{children}</strong>
    </>
  );
};
