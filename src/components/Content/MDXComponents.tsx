import React from 'react';
import {
  PostHeader, PostP, PostImage, Strong, Em, Code
} from '../Post';

interface Props {
  [x: string]: string;
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
  PostHeader,
  PostP,
  PostImage,
  Strong,
  Em,
};
