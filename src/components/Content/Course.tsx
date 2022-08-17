import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import tw, { css } from 'twin.macro';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { IMDX } from '@/types';
import { Header } from '../Base';
import { CourseItem } from './CourseItem';

interface ICourseProps {
  title: string;
  posts: IMDX[];
}

export const Course = ({ title, posts, }: ICourseProps) => {
  const [ icon, setIcon, ] = useState<React.ReactElement>(null);

  useEffect(() => {
    if (posts.length === 0) {
      setIcon(<FaFolder />);
    } else {
      setIcon(<FaFolderOpen />);
    }
  }, []);

  const headerColor = posts.length === 0
    ? tw` text-gray-400/60 `
    : tw` text-black-700 `;

  const boxStyle = tw` my-2.5 nth-1:mt-0 nth-last-1:mb-0 `;

  const headerStyle = css`
    ${headerColor}
    ${tw` pl-1.5 mb-1.5 pb-1.5 border-b border-gray-400/60 `}

    & > span {
      ${tw` flex items-center justify-start `}

      & > svg {
        ${tw` mr-[5px] `}
      }
    }
  `;

  return (
    <>
      <div css={boxStyle}>
        <Header Type='h4' styles={headerStyle}><span>{icon}{title}</span></Header>
        <div>
          {posts.length !== 0 && posts.map(({ frontMatter, fullPath, }) => (
            <CourseItem
              key={uuid()}
              href={fullPath}
            >
              {frontMatter.order}. {frontMatter.title}
            </CourseItem>
          ))}
          {posts.length === 0 && (
            <p tw='text-gray-400/60'>글이 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};
