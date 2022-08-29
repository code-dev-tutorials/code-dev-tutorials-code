import React from 'react';
import tw, { css } from 'twin.macro';

interface ICodeProps {
  children: React.ReactNode;
}

export const Code = ({ children, }: ICodeProps) => {
  const codeStyle = css`
    ${tw` font-sans text-[90%] border border-royal-blue-300 rounded-1 px-1 bg-royal-blue-50 text-royal-blue-500 `}
  `;
  return (
    <>
      <code css={codeStyle}>{children}</code>
    </>
  );
};
