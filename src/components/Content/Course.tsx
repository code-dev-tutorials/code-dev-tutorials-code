import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import tw, { css } from 'twin.macro';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import Link from 'next/link';
import { IMDX } from '@/types';
import { Header } from '../Base';
import { CourseItem } from './CourseItem';
import { mediaFontNormal } from '@/styles';

interface ICourseProps {
  title: string;
  link?: string;
  posts: IMDX[];
}

export const Course = ({ title, link, posts, }: ICourseProps) => {
  const [ icon, setIcon, ] = useState<React.ReactElement>(null);

  const href = link || title;

  useEffect(() => {
    if (posts.length === 0) {
      setIcon(<FaFolder />);
    } else {
      setIcon(<FaFolderOpen />);
    }
  }, []);

  const boxStyle = tw` my-2.5 nth-1:mt-0 nth-last-1:mb-0 `;

  const headerStyle = css`
    ${tw` pl-1.5 mb-1.5 pb-1.5 border-b border-gray-400/60 `}

    & > span {
      ${posts.length !== 0 ? css`
        & > a {
          ${tw` inline-flex items-center justify-start text-royal-blue-400 hover:text-royal-blue-600 hover:underline `}

          & > svg {
            ${tw` mr-[5px] `}
          }
        }
      ` : css`
        ${tw` inline-flex items-center justify-start text-gray-400/60 `}

        & > svg {
          ${tw` mr-[5px] `}
        }
      `}
    }
  `;

  const noPostStyle = css`
    ${mediaFontNormal}
    ${tw` text-gray-400/60 `}
  `;

  return (
    <>
      <div css={boxStyle}>
        <Header Type='h4' styles={headerStyle}>
          <span>
            {posts.length !== 0 && (
              <Link href={href} passHref>
                <a>{icon}{title}</a>
              </Link>
            )}
            {posts.length === 0 && (
              <>{icon}{title}</>
            )}
          </span>
        </Header>
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
            <p css={noPostStyle}>글이 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};
