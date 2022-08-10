import { getAllTimeMDX } from './getAllTimeMDX';

export const getCategoryList = () => {
  const categoryArray: string[] = [];

  getAllTimeMDX().filter(({ frontMatter, }) => {
    categoryArray.push(frontMatter.category);
  });

  return [ ...new Set(categoryArray), ];
};
