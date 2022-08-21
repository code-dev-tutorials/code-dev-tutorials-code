import React from 'react';
import tw, { css } from 'twin.macro';
import { P } from '../Base';

interface IPostPProps {
  children: React.ReactNode;
}

export const PostP = ({ children, }: IPostPProps) => {
  const postPStyle = css`
    ${tw` mb-5 nth-last-1:mb-0 `}
  `;

  return (
    <>
      <P styles={postPStyle}>{children}</P>
    </>
  );
};
