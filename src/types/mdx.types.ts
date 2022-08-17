import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  IJSBack, IJSExtendsPosts, IJSFrontPosts, IProgrammingPosts, IWebBasicPosts
} from '@/utils/MDX';

export interface IFrontMatter {
  order?: number;
  title?: string;
  description?: string;
  cover?: string;
  tags?: string[];
  category?: string;
  created?: Date | number;
  updated?: Date | number;
  published?: boolean;
}

export interface IMDX {
  frontMatter?: IFrontMatter;
  slug?: string;
  fullPath?: string;
  content?: string;
}

export interface ISlug {
  frontMatter: IFrontMatter;
  source: MDXRemoteSerializeResult;
  slug: string;
}

export interface IPosts {
  programming: IProgrammingPosts;
  webBasic: IWebBasicPosts;
  jsExtends: IJSExtendsPosts;
  jsFront: IJSFrontPosts;
  jsBack: IJSBack;
}
