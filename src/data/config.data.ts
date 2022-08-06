export interface IConfig {
  title: string;
  description: string;
  url: string;
  type: string;
  image: string;
  keywords: string;
  version: string;
}

export const siteData: IConfig = {
  title: '사이트 이름',
  description: '',
  keywords: '',
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : '',
  image: '',
  version: 'v0.0.0',
};
