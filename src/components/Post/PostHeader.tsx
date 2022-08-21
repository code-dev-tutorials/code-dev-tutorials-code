import React from 'react';
import tw, { css } from 'twin.macro';
import { Header } from '../Base';

interface IPostHeaderProps {
  children: React.ReactNode;
  type?: ('h2' | 'h3' | 'h4' | 'h5' | 'h6');
}

export const PostHeader = ({ children, type = 'h2', }: IPostHeaderProps) => {
  const pHeaderStyle = css`
    ${tw` pt-5 mt-10 pb-5 mb-10 border-b border-gray-400/60 `}
  `;

  return (
    <>
      <Header Type={type} styles={pHeaderStyle}>
        <span>{children}</span>
      </Header>
    </>
  );
};
