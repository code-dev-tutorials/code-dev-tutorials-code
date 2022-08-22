import React from 'react';
import { FaListUl } from 'react-icons/fa';
import tw, { css } from 'twin.macro';
import { IH2 } from '@/types';
import { PostA } from '../Post';
import { mediaFontHeader } from '@/styles';

interface IPostTocProps {
  toc?: IH2[];
}

export const PostToc = ({ toc, }: IPostTocProps) => {
  const PostTocStyle = css`
    & > div#top {
      ${mediaFontHeader}
      ${tw` text-black-700 font-bold `}

      & > span {
        ${tw` text-[140%] `}

        & > svg {
          ${tw` inline-block mt-[-7px] mr-[10px] `}
        }
      }
    }
  `;

  // const PostTocStyle = css`
  //   margin: 80px 0;
  //   overflow-y: hidden;
  //   & > div {
  //     padding: 20px 10px;
  //     background-color: #333333;
  //     text-align: justify;
  //     letter-spacing: -1px;
  //     line-height: 1;
  //     border-radius: 10px;
  //     margin-bottom: 10px;
  //     & > span {
  //       font-size: 120%;
  //       color: #ffffff;
  //       font-weight: 900;
  //       display: flex;
  //       flex-direction: row;
  //       align-items: center;
  //       justify-content: flex-start;
  //       & > svg {
  //         fill: #ffffff;
  //         margin-right: 10px;
  //       }
  //     }
  //   }
  //   & > ul {
  //     & ul {
  //       margin-left: 20px;
  //     }
  //     & li {
  //       margin: 3px 0;
  //       & > span {
  //         margin-right: 5px;
  //         font-weight: 900;
  //         color: #3f91ff70;
  //         border-radius: 5px;
  //       }
  //       &:hover {
  //         & > span {
  //           color: #3f91ff;
  //         }
  //       }
  //     }
  //   }
  //   @media (min-width: 1px) and (max-width: 600px) {
  //     & > div {
  //       font-size: ${size[4]};
  //     }
  //     & li {
  //       font-size: ${size[1]};
  //     }
  //   }
  //   @media (min-width: 601px) and (max-width: 800px) {
  //     & > div {
  //       font-size: ${size[5]};
  //     }
  //     & li {
  //       font-size: ${size[2]};
  //     }
  //   }
  //   @media (min-width: 801px) {
  //     & > div {
  //       font-size: ${size[6]};
  //     }
  //     & li {
  //       font-size: ${size[3]};
  //     }
  //   }
  // `;

  return (
    <>
      {toc.length > 0 && (
        <div id='post-table-of-contents' css={PostTocStyle}>
          <div id='top'>
            <span><FaListUl />목차</span>
          </div>
          <ul id='table-of-contents-list'>
            {toc.map((item, index) => (
              <li key={item.name + item.id}>
                <span>{index + 1}.</span>
                <PostA href={`#${item.id}`}>{item.text}</PostA>
                {item.items.length > 0 && (
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subItem.name + subItem.id}>
                        <span>{index + 1}.{subIndex + 1}.</span>
                        <PostA href={`#${subItem.id}`}>{subItem.text}</PostA>
                        {subItem.items.length > 0 && (
                          <ul>
                            {subItem.items.map((subItem2, subIndex2) => (
                              <li key={subItem2.name + subItem2.id}>
                                <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.</span>
                                <PostA href={`#${subItem2.id}`}>{subItem2.text}</PostA>
                                {subItem2.items.length > 0 && (
                                  <ul>
                                    {
                                      subItem2.items.map((lastItem, lastIndex) => (
                                        <li key={lastItem.name + lastItem.id}>
                                          <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.{lastIndex + 1}.</span>
                                          <PostA href={`#${lastItem.id}`}>{lastItem.text}</PostA>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
