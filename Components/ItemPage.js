import styled from 'styled-components';
import BookmarkBlue from '../public/assets/BookMarkBlue.svg';
import BookmarkWhite from '../public/assets/BookMarkWhite.svg';
import Image from 'next/image';
import ItemFrame from './ItemFrame';
import FrameList from '../Components/ItemFrame'

export default function ItemPage({ItemFrame}) {
    return (

        {ItemFrame.map((itemPoint) => (
            <>
            <p key={itemPoint.id}>Item Page</p>
              
                <Link href={`/itemframe/${itemPoint.name}`}>
                  <Button>{itemPoint.name}</Button>
                </Link>

                <FrameList>
        <Title>{name}</Title>
        <Price>{price}</Price>
        <Button variant="primary">get it</Button>
      </FrameList>
                </>
        ))})};


        const