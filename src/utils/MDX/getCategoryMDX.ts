import { getAllTimeMDX } from './getAllTimeMDX';

export const getCategoryMDX = (category: string) => {
  return getAllTimeMDX()
    .filter(({ frontMatter, }) => frontMatter.category === category)
    .sort((a, b) => {
      const beforeDate = a.frontMatter.created as number;
      const afterDate = b.frontMatter.created as number;

      return beforeDate - afterDate;
    });
};
