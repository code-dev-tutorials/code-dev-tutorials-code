import { SerializedStyles } from '@emotion/react';
import React from 'react';
import tw, { css } from 'twin.macro';

interface IBlockProps {
  children: React.ReactNode;
  Type?: ('div' | 'aside' | 'header' | 'footer' | 'section');
  styles?: SerializedStyles;
}

export const Block = ({ children, Type = 'div', styles, }: IBlockProps) => {
  const BlockStyle = css`
    ${tw` bg-white p-5 rounded-5 shadow-lg shadow-blue-800/30 `};
    ${styles};
  `;

  return (
    <>
      <Type css={BlockStyle}>
        {children}
      </Type>
    </>
  );
};
