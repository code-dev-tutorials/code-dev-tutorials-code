import React, { useCallback } from 'react';
import tw, { css } from 'twin.macro';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import { AppDispatch, RootState } from '@/store';
import { ChangeWord } from '@/reducers/TestReducer';

const TestPage = () => {
  const word = useSelector((state: RootState) => state.test.word);
  const dispatch = useDispatch<AppDispatch>();

  const onClickButton = useCallback(() => {
    dispatch(ChangeWord());
  }, [ word, ]);

  const styles = {
    testPage: tw`p-5 bg-black-700 text-white text-center text-[32px]`,
    button: tw`block p-2.5 bg-blue-500 text-white text-center mt-2.5 mx-auto hover:bg-blue-700 text-2xl mb-2.5`,
    person: css`
      ${tw`
        p-2.5 bg-blue-700 text-center text-white my-2
      `};

      & > p {
        ${tw`
          nth-1:( text-3xl font-black mb-1.5 )
        `}
      }

      ${tw`
        nth-1:( mt-0 text-blue-800 bg-blue-300/50 rounded-5 m-2.5 shadow-md shadow-blue-900/60 )
      `};

      ${tw`
        nth-last-1:( mb-0 )
      `};
    `,
    link: [
      tw`inline-block mt-5 p-5 bg-black-700/60 text-white text-2xl mx-auto`,
      tw`hover:( bg-black-800 )`,
    ],
    linkWrap: tw`flex flex-row items-center justify-center`,
  };

  const person = [
    { name: 'NIHILncunia', email: 'nihil_ncunia@naver.com', },
    { name: 'anikai7556', email: 'anikai7556@naver.com', },
    { name: 'LEVAN', email: 'levan7556@naver.com', },
  ];

  return (
    <>
      <div css={styles.testPage}>Hello {word}!!</div>
      <button type='button' onClick={onClickButton} css={styles.button}>
        클릭해서 변경
      </button>
      <div>
        {person.map((item) => (
          <div key={uuid()} css={styles.person}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>

      <div css={styles.linkWrap}>
        <Link href='/' passHref>
          <a css={styles.link}>홈으로 돌아가기</a>
        </Link>
      </div>
    </>
  );
};

export default TestPage;
