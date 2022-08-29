import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import { v4 as uuid } from 'uuid';
import {
  getCategoryList, getCategoryMDX, getJSBackMDX, getJSExtendMDX, getJSFrontMDX, getProgrammingMDX, getWebBasicMDX
} from '@/utils/MDX';
import { IMDX, IPosts } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { Block, Header } from '@/components/Base';
import {
  CategoryData, CourseItem, PageNav, PostList
} from '@/components/Content';

interface ICategoryIndexProps {
  posts: IMDX[];
  category: string;
  allPosts: IPosts;
}

const CategoryIndexPage = ({ posts, category, allPosts, }: ICategoryIndexProps) => {
  const categoryString = category === 'WebInternet' ? 'Web & Internet' : category;

  const headerStyle = css`
    ${tw` mb-5 text-black-700 `}
  `;

  const postsStyle = css`
    ${tw` mt-10 pt-5 border-t border-gray-400/60 `}
  `;

  const boxStyle = css`
    ${tw` mb-5 `}
  `;

  const meta = useSiteMeta({
    title: `${categoryString} 코스`,
    url: `/${category}`,
  });
  return (
    <>
      <AppLayout meta={meta}>
        <div id='category-page'>
          <Block styles={boxStyle}>
            <PageNav category={category} />
          </Block>
          <Block styles={boxStyle}>
            <Header styles={headerStyle}>{categoryString}</Header>
            <CategoryData category={category} />
            <div css={postsStyle}>
              {posts.map(({ fullPath, frontMatter, }) => (
                <CourseItem key={uuid()} href={fullPath}>
                  {frontMatter.order}. {frontMatter.title}
                </CourseItem>
              ))}
            </div>
          </Block>
          <PostList posts={allPosts} />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategoryList();

  return {
    paths: categories.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    category: string;
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { category, }, }: Params) => {
  const posts = getCategoryMDX(category);
  const programming = getProgrammingMDX();
  const webBasic = getWebBasicMDX();
  const jsExtends = getJSExtendMDX();
  const jsFront = getJSFrontMDX();
  const jsBack = getJSBackMDX();

  return {
    props: {
      posts,
      category,
      allPosts: {
        programming,
        webBasic,
        jsExtends,
        jsFront,
        jsBack,
      },
    },
  };
};

export default CategoryIndexPage;
