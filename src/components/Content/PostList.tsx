import React from 'react';
import tw, { css } from 'twin.macro';
import { GoListOrdered } from 'react-icons/go';
import { Block, Header } from '../Base';

interface IPostListProps {
  children: React.ReactNode;
}

export const PostList = () => {
  const PostListStyle = css``;

  const PostListHeaderStyle = css`
    ${tw` flex flex-row items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-[700] rounded-5 `};

    & > svg {
      ${tw` mt-[5px] mr-[5px] `};
    }
  `;

  return (
    <>
      <Block Type='aside' styles={PostListStyle}>
        <Header styles={PostListHeaderStyle}><GoListOrdered />전체 코스 목록</Header>
      </Block>
    </>
  );
};
