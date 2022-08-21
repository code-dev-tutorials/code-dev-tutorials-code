import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import tw, { css } from 'twin.macro';
import { getAllTimeMDX, getMDX } from '@/utils/MDX';
import { useSiteMeta } from '@/hooks';
import { ISlug } from '@/types';
import AppLayout from '@/layouts/AppLayout';
import { Block } from '@/components/Base';
import { MDXComponents, PageNav, PostInfo } from '@/components/Content';
import { getDate } from '@/utils';

interface ICategorySlugPageProps {
  post: ISlug;
}

const CategorySlugPage = ({ post, }: ICategorySlugPageProps) => {
  const { frontMatter, slug, source, } = post;

  const navBoxStyle = css`
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
          <Block styles={navBoxStyle}>
            <PageNav
              category={frontMatter.category}
              title={frontMatter.title}
            />
          </Block>
          <Block styles={navBoxStyle}>
            <PostInfo name='제목'>{frontMatter.title}</PostInfo>
            <PostInfo name='작성일'>{getDate(frontMatter.created as number)}</PostInfo>
            <PostInfo name='수정일'>{getDate(frontMatter.updated as number)}</PostInfo>
          </Block>
          <Block>
            <MDXRemote {...source} components={MDXComponents} />
          </Block>
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

  return {
    props: {
      post,
    },
  };
};

export default CategorySlugPage;
