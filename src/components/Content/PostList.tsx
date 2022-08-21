import React, { useCallback, useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { TbBinary, TbDatabase } from 'react-icons/tb';
import { SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import tw, { css } from 'twin.macro';
import { IPosts } from '@/types';
import { Block } from '@/components/Base';
import { Course, CourseGroup } from './index';
import { mediaFontNormal } from '@/styles';

interface IPostListProps {
  posts: IPosts;
  hide: boolean;
}

export const PostList = ({ posts, hide, }: IPostListProps) => {
  const [ isHide, setIsHide, ] = useState<boolean>(null);
  const [ word, setWord, ] = useState('');
  const [ icon, setIcon, ] = useState<React.ReactElement>(null);

  useEffect(() => {
    if (hide) {
      setIsHide(true);
      setWord('펼치기');
      setIcon(<BiExpand />);
    } else {
      setIsHide(false);
      setWord('접기');
      setIcon(<BiCollapse />);
    }
  }, []);

  const onClickHide = useCallback(() => {
    if (isHide) {
      setIsHide(false);
      setWord('접기');
      setIcon(<BiCollapse />);
    } else {
      setIsHide(true);
      setWord('펼치기');
      setIcon(<BiExpand />);
    }
  }, [ isHide, word, ]);

  const buttonStyle = css`
    ${mediaFontNormal}
    ${tw` w-full flex flex-row items-center justify-center bg-royal-blue-100 text-royal-blue-500 p-2.5 rounded-2.5 border border-royal-blue-500/20 hover:border-royal-blue-500 hover:bg-royal-blue-500 hover:text-white tracking-tighter `}
    ${isHide ? '' : tw` mb-10 `}

    & > svg {
      ${tw` mr-[5px] text-[130%] `}
    }
  `;

  return (
    <>
      <Block Type='aside'>
        <button
          type='button'
          onClick={onClickHide}
          css={buttonStyle}
        >
          {icon}전체 코스 목록 {word}
        </button>
        {isHide === false && (
          <>
            <CourseGroup title='프로그래밍 사전지식' icon={<TbBinary />}>
              <Course
                title='Programming'
                posts={posts.programming.ProgrammingPosts}
              />
              <Course
                title='Web &amp; Internet'
                link='WebInternet'
                posts={posts.programming.WebInternetPosts}
              />
            </CourseGroup>
            <CourseGroup title='웹 개발의 기본' icon={<SiHtml5 />}>
              <Course title='HTML' posts={posts.webBasic.htmlPosts} />
              <Course title='CSS' posts={posts.webBasic.cssPosts} />
              <Course title='JavaScript' posts={posts.webBasic.jsPosts} />
            </CourseGroup>
            <CourseGroup title='자바스크립트 심화' icon={<SiJavascript />}>
              <Course title='TypeScript' posts={posts.jsExtends.tsPosts} />
              <Course title='NodeJS' posts={posts.jsExtends.nodePosts} />
              <Course title='Webpack' posts={posts.jsExtends.webpackPosts} />
            </CourseGroup>
            <CourseGroup title='JS 프론트엔드' icon={<SiReact />}>
              <Course title='ReactJS' posts={posts.jsFront.reactPosts} />
              <Course title='NextJS' posts={posts.jsFront.nextPosts} />
              <Course title='VueJS' posts={posts.jsFront.vuePosts} />
              <Course title='NuxtJS' posts={posts.jsFront.nuxtPosts} />
              <Course title='SCSS' posts={posts.jsFront.scssPosts} />
              <Course title='StyledComponents' posts={posts.jsFront.styledComponentsPosts} />
              <Course title='Emotion' posts={posts.jsFront.emotionPosts} />
              <Course title='TailwindCSS' posts={posts.jsFront.tailwindPosts} />
            </CourseGroup>
            <CourseGroup title='JS 백엔드' icon={<TbDatabase />}>
              <Course title='ExpressJS' posts={posts.jsBack.expressPosts} />
              <Course title='NestJS' posts={posts.jsBack.nestPosts} />
            </CourseGroup>
          </>
        )}
      </Block>
    </>
  );
};
