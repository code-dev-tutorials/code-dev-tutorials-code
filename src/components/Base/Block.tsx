import { SerializedStyles } from '@emotion/react';
import React from 'react';
import tw, { css } from 'twin.macro';
import { mediaFontNormal } from '@/styles';

interface IBlockProps {
  children: React.ReactNode;
  Type?: ('div' | 'aside' | 'header' | 'footer' | 'section');
  styles?: SerializedStyles;
}

export const Block = ({ children, Type = 'div', styles, }: IBlockProps) => {
  const BlockStyle = css`
    ${mediaFontNormal}
    ${tw` bg-white p-5 rounded-2.5 shadow-md shadow-blue-800/30 tracking-tighter border border-black-500/20 `};
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
