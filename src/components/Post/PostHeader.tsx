import React from 'react';
import { FaLink } from 'react-icons/fa';
import tw, { css } from 'twin.macro';
import { Header } from '../Base';

interface IPostHeaderProps {
  children: React.ReactNode;
  type?: ('h2' | 'h3' | 'h4' | 'h5');
}

export const PostHeader = ({ children, type = 'h2', }: IPostHeaderProps) => {
  const pHeaderStyle = css`
    ${tw` pt-5 mt-10 pb-5 mb-10 border-b border-gray-400/60 `}

    & > span {
      & > a {
        ${tw` ml-2.5 text-royal-blue-200 hover:text-royal-blue-600 `}

        & > svg {
          ${tw` inline-block mt-[-4px] `}
        }
      }
    }
  `;

  return (
    <>
      <Header Type={type} styles={pHeaderStyle} className='post-heading'>
        <span>{children} <a href='#top' aria-label='top'><FaLink /></a></span>
      </Header>
    </>
  );
};
