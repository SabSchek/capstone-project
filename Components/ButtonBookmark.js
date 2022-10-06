import styled from 'styled-components';
import BookmarkBlue from '../public/assets/BookMarkBlue.svg';
import BookmarkWhite from '../public/assets/BookMarkWhite.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function ButtonBookmark() {
  const [isActive, setIsActive] = useState();

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <Bookmark onClick={handleClick}>
      <Image
        src={isActive ? BookmarkBlue : BookmarkWhite}
        width={25}
        height={30}
      />
    </Bookmark>
  );
}

const Bookmark = styled.button`
  background: transparent;
  height: 30px;
  border-color: black;
  border-style: none;
  padding: 0;
  margin: 0;
`;
