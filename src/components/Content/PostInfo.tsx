import React from 'react';
import tw, { css } from 'twin.macro';
import { P } from '../Base';

interface IPostInfoProps {
  children: React.ReactNode;
  name: string;
}

export const PostInfo = ({ children, name, }: IPostInfoProps) => {
  const infoStyle = css`
    ${tw` my-[5px] nth-1:mt-0 nth-last-1:mb-0 `}

    & > span {
      ${tw` font-bold p-1 px-2.5 inline-block mr-2.5 bg-royal-blue-100 text-royal-blue-500 rounded-2.5 `}
    }
  `;

  return (
    <>
      <P styles={infoStyle}>
        <span>{name}</span>
        {children}
      </P>
    </>
  );
};
