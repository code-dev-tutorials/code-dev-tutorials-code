import { SerializedStyles } from '@emotion/react';
import React from 'react';
import tw, { css } from 'twin.macro';

interface IHeaderProps {
  children: React.ReactNode;
  Type?: ('h2' | 'h3' | 'h4' | 'h5' | 'h6');
  styles?: SerializedStyles;
}

export const Header = ({ children, Type = 'h2', styles, }: IHeaderProps) => {
  const HeaderStyle = css`
    ${tw` xs:(text-2xl) sm:(text-3xl) md:(text-4xl) lg:(text-5xl) `};
    ${styles};
  `;

  return (
    <>
      <Type css={HeaderStyle}>{children}</Type>
    </>
  );
};
