import React, { useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router'
import BookDetail from '../components/BookDetail';

const BookPage = () => {
  const param = useParams();
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <div>
      <BookDetail bookID={param.id} />
    </div>
  )
}

export default BookPage
