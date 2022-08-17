import { SerializedStyles } from '@emotion/react';
import React from 'react';
import tw, { css } from 'twin.macro';
import { mediaFontHeader } from '@/styles';

interface IHeaderProps {
  children: React.ReactNode;
  Type?: ('h2' | 'h3' | 'h4' | 'h5' | 'h6');
  styles?: SerializedStyles;
}

export const Header = ({ children, Type = 'h2', styles, }: IHeaderProps) => {
  const headerSizes = {
    h2: tw`text-[140%]`,
    h3: tw`text-[110%]`,
    h4: tw`text-[80%]`,
    h5: tw`text-[60%]`,
    h6: tw`text-[40%]`,
  };

  const HeaderStyle = css`
    ${mediaFontHeader};
    ${tw` font-bold `};

    & > span {
      ${headerSizes[Type]};
    }

    ${styles};
  `;

  return (
    <>
      <Type css={HeaderStyle}>{children}</Type>
    </>
  );
};
