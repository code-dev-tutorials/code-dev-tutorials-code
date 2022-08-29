import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import {
  getAllTimeMDX, getJSBackMDX, getJSExtendMDX, getJSFrontMDX, getMDX, getProgrammingMDX, getWebBasicMDX
} from '@/utils/MDX';
import { useSiteMeta } from '@/hooks';
import { IPosts, ISlug } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import { Block } from '@/components/Base';
import {
  PageNav, PostContent, PostInfo, PostList
} from '@/components/Content';
import { getDate } from '@/utils';

interface ICategorySlugPageProps {
  post: ISlug;
  posts: IPosts;
}

const CategorySlugPage = ({ post, posts, }: ICategorySlugPageProps) => {
  const { frontMatter, slug, source, } = post;

  const boxStyle = css`
    ${tw` mb-5 `}
  `;

  const meta = useSiteMeta({
    title: frontMatter.title,
    url: `${frontMatter.category}/${slug}`,
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='post-page'>
          <Block styles={boxStyle}>
            <PageNav
              category={frontMatter.category}
              title={frontMatter.title}
            />
          </Block>
          <Block styles={boxStyle}>
            <PostInfo name='제목'>{frontMatter.title}</PostInfo>
            <PostInfo name='작성일'>{getDate(frontMatter.created as number)}</PostInfo>
            <PostInfo name='수정일'>{getDate(frontMatter.updated as number)}</PostInfo>
          </Block>
          <Block styles={boxStyle}>
            <PostContent source={source} frontMatter={frontMatter} />
          </Block>
          <PostList posts={posts} />
        </div>
      </AppLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllTimeMDX();

  return {
    paths: allPosts.map(({ slug, frontMatter: { category, }, }) => ({
      params: {
        category,
        slug,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    category: string;
    slug: string;
  };
}

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const { slug, } = params;
  const post = await getMDX(slug);

  const programming = getProgrammingMDX();
  const webBasic = getWebBasicMDX();
  const jsExtends = getJSExtendMDX();
  const jsFront = getJSFrontMDX();
  const jsBack = getJSBackMDX();

  return {
    props: {
      post,
      posts: {
        programming,
        webBasic,
        jsExtends,
        jsFront,
        jsBack,
      },
    },
  };
};

export default CategorySlugPage;
