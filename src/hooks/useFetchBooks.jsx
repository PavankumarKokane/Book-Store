import { useEffect, useState } from "react";

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [startIndex, setstartIndex] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=a&orderBy=newest&maxResults=36&startIndex=${startIndex}`);
      const data = await res.json();
      setBooks([...books, ...data.items]);
      setTotal(data.totalItems);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBooks();
  }, [startIndex]);

  return { books, startIndex, total, loading, error, setstartIndex };
};

export default useFetchBooks;