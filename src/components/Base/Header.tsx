import { SerializedStyles } from '@emotion/react';
import React from 'react';
import tw, { css } from 'twin.macro';
import { mediaFontHeader } from '@/styles';

interface IHeaderProps {
  children: React.ReactNode;
  Type?: ('h2' | 'h3' | 'h4' | 'h5');
  styles?: SerializedStyles;
  className?: string;
}

export const Header = ({
  children, Type = 'h2', styles, className,
}: IHeaderProps) => {
  const headerSizes = {
    h2: tw`text-[140%]`,
    h3: tw`text-[110%]`,
    h4: tw`text-[80%]`,
    h5: tw`text-[70%]`,
  };

  const HeaderStyle = css`
    ${mediaFontHeader};
    ${tw` font-bold tracking-tighter text-black-700 `};

    & > span {
      ${headerSizes[Type]};
    }

    ${styles};
  `;

  return (
    <>
      <Type css={HeaderStyle} className={className}>{children}</Type>
    </>
  );
};
