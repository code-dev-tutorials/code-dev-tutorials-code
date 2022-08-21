import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { mediaFontNormal } from '@/styles';

interface IPProps {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export const P = ({ children, styles, }: IPProps) => {
  const pStyle = css`
    ${mediaFontNormal}
    ${tw` text-black-700 font-normal text-justify `}
    ${styles}
  `;
  return (
    <>
      <p css={pStyle}>{children}</p>
    </>
  );
};
