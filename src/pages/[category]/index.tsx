import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import { v4 as uuid } from 'uuid';
import { getCategoryList, getCategoryMDX } from '@/utils/MDX';
import { IMDX } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { Block, Header } from '@/components/Base';
import { CategoryData, CourseItem, PageNav } from '@/components/Content';

interface ICategoryIndexProps {
  posts: IMDX[];
  category: string;
}

const CategoryIndexPage = ({ posts, category, }: ICategoryIndexProps) => {
  const categoryString = category === 'WebInternet' ? 'Web & Internet' : category;

  const headerStyle = css`
    ${tw` mb-5 text-black-700 `}
  `;

  const postsStyle = css`
    ${tw` mt-10 pt-5 border-t border-gray-400/60 `}
  `;

  const navBoxStyle = css`
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
          <Block styles={navBoxStyle}>
            <PageNav category={category} />
          </Block>
          <Block>
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

  return {
    props: {
      posts,
      category,
    },
  };
};

export default CategoryIndexPage;
