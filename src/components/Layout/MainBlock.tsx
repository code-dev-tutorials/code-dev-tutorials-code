import React from 'react';
import { css } from '@emotion/react';

interface IMainBlockProps {
  children: React.ReactNode;
}

export const MainBlock = ({ children, }: IMainBlockProps) => {
  const MainBlockStyle = css``;

  return (
    <>
      <main css={MainBlockStyle}>
        {children}
      </main>
    </>
  );
};
