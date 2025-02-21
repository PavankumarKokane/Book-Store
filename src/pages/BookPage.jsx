import React from 'react'
import { useParams } from 'react-router'

const BookPage = () => {
  const param = useParams();
  return (
    <div>
      {param.id}
    </div>
  )
}

export default BookPage
