import React from 'react';
import {
  PostHeader, PostP, PostImage, Strong, Em, Code, PostCodeBlock, List
} from '../Post';

interface Props {
  [x: string]: any;
}

export const MDXComponents = {
  h1: (props: Props) => (
    <PostHeader>{props.children}</PostHeader>
  ),
  h2: (props: Props) => (
    <PostHeader type='h3'>{props.children}</PostHeader>
  ),
  h3: (props: Props) => (
    <PostHeader type='h4'>{props.children}</PostHeader>
  ),
  h4: (props: Props) => (
    <PostHeader type='h5'>{props.children}</PostHeader>
  ),
  p: (props: Props) => (
    <PostP>{props.children}</PostP>
  ),
  img: (props: Props) => (
    <PostImage src={props.src} alt={props.alt} />
  ),
  strong: (props: Props) => (<Strong>{props.children}</Strong>),
  em: (props: Props) => (<Em>{props.children}</Em>),
  code: (props: Props) => (<Code>{props.children}</Code>),
  pre: (props: Props) => (
    <PostCodeBlock className={props.className}>{props.children}</PostCodeBlock>
  ),
  ul: (props: Props) => (<List type='ul'>{props.children}</List>),
  ol: (props: Props) => (<List type='ol'>{props.children}</List>),
  PostHeader,
  PostP,
  PostImage,
  Strong,
  Em,
  Code,
  PostCodeBlock,
  List,
};
