import { IMDX } from '@/types';
import { getCategoryMDX } from './getCategoryMDX';

export interface IProgrammingPosts {
  ProgrammingPosts: IMDX[];
  WebInternetPosts: IMDX[];
}

export const getProgrammingMDX = (): IProgrammingPosts => {
  const ProgrammingPosts = getCategoryMDX('Programming');
  const WebInternetPosts = getCategoryMDX('WebInternet');

  return {
    ProgrammingPosts,
    WebInternetPosts,
  };
};

export interface IWebBasicPosts {
  htmlPosts: IMDX[];
  cssPosts: IMDX[];
  jsPosts: IMDX[];
}

export const getWebBasicMDX = (): IWebBasicPosts => {
  const htmlPosts = getCategoryMDX('HTML');
  const cssPosts = getCategoryMDX('CSS');
  const jsPosts = getCategoryMDX('JavaScript');

  return {
    htmlPosts,
    cssPosts,
    jsPosts,
  };
};

export interface IJSExtendsPosts {
  nodePosts: IMDX[];
  tsPosts: IMDX[];
  webpackPosts: IMDX[];
}

export const getJSExtendMDX = (): IJSExtendsPosts => {
  const nodePosts = getCategoryMDX('NodeJS');
  const tsPosts = getCategoryMDX('TypeScript');
  const webpackPosts = getCategoryMDX('Webpack');

  return {
    nodePosts,
    tsPosts,
    webpackPosts,
  };
};

export interface IJSFrontPosts {
  reactPosts: IMDX[];
  nextPosts: IMDX[];
  vuePosts: IMDX[];
  nuxtPosts: IMDX[];
  scssPosts: IMDX[];
  emotionPosts: IMDX[];
  styledComponentsPosts: IMDX[];
  tailwindPosts: IMDX[];
}

export const getJSFrontMDX = (): IJSFrontPosts => {
  const reactPosts = getCategoryMDX('ReactJS');
  const nextPosts = getCategoryMDX('NextJS');
  const vuePosts = getCategoryMDX('VueJS');
  const nuxtPosts = getCategoryMDX('NuxtJS');
  const scssPosts = getCategoryMDX('SCSS');
  const emotionPosts = getCategoryMDX('Emotion');
  const styledComponentsPosts = getCategoryMDX('StyledComponents');
  const tailwindPosts = getCategoryMDX('TailwindCSS');

  return {
    reactPosts,
    nextPosts,
    vuePosts,
    nuxtPosts,
    scssPosts,
    emotionPosts,
    styledComponentsPosts,
    tailwindPosts,
  };
};

export interface IJSBack {
  expressPosts: IMDX[];
  nestPosts: IMDX[];
}

export const getJSBackMDX = (): IJSBack => {
  const expressPosts = getCategoryMDX('ExpressJS');
  const nestPosts = getCategoryMDX('NestJS');

  return {
    expressPosts,
    nestPosts,
  };
};
