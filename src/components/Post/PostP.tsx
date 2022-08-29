import React from 'react';
import tw, { css } from 'twin.macro';
import { P } from '../Base';

interface IPostPProps {
  children: React.ReactNode;
}

export const PostP = ({ children, }: IPostPProps) => {
  const postPStyle = css`
    ${tw` mb-[30px] `}
  `;

  return (
    <>
      <P styles={postPStyle}>{children}</P>
    </>
  );
};
