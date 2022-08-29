import React from 'react';
import { PostHeader, PostP } from '../Post';
import { PostImage } from '../Post/PostImage';

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
  PostHeader,
  PostP,
};
