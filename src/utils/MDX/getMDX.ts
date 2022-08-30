import { serialize } from 'next-mdx-remote/serialize';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkPrism from 'remark-prism';
import rehypeImgSize from 'rehype-img-size';
import { ISlug } from '@/types';
import { getAllTimeMDX } from './getAllTimeMDX';

export const getMDX = async (slug: string): Promise<ISlug> => {
  const posts = getAllTimeMDX().filter((post) => post.slug === slug);

  const { frontMatter, content, slug: postSlug, } = posts[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkUnwrapImages,
        remarkPrism,
      ],
      rehypePlugins: [
        rehypeImgSize,
      ],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
    slug: postSlug,
  };
};
