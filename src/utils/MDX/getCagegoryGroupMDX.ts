import { getCategoryMDX } from './getCategoryMDX';

export const getWebBasicMDX = () => {
  const htmlPosts = getCategoryMDX('HTML');
  const cssPosts = getCategoryMDX('CSS');
  const jsPosts = getCategoryMDX('JavaScript');

  return {
    htmlPosts,
    cssPosts,
    jsPosts,
  };
};

export const getJSExtendMDX = () => {
  const nodePosts = getCategoryMDX('NodeJS');
  const tsPosts = getCategoryMDX('TypeScript');

  return {
    nodePosts,
    tsPosts,
  };
};
