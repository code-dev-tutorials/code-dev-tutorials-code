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
  title: '코드 데브 튜토리얼스',
  description: '프로그래밍 초보자가 프로그래밍 초보자들에게 남기는 프로그래밍 지식 노트.',
  keywords: 'Programming,Coding,프로그래밍,코딩',
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://code-dev-tutorials.github.io',
  image: '',
  version: 'v1.0.0',
};
