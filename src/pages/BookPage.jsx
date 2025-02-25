import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import BookDetail from '../components/BookDetail';

const BookPage = () => {
  const param = useParams();
  return (
    <div>
      <BookDetail bookID={param.id} />
    </div>
  )
}

export default BookPage
