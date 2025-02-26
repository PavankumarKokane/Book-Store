import { useEffect, useState } from "react";

const useFetchBooks = (book_name) => {
  const [books, setBooks] = useState([]);
  const [startIndex, setstartIndex] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const search_query = book_name;

  const getBooks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_query}&orderBy=newest&maxResults=36&startIndex=${startIndex}`);
      const data = await res.json();
      //console.log(data);
      search_query == "a" ? setBooks([...books, ...data.items]) : setBooks([...books, ...data.items])
      setTotal(data.totalItems);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBooks();
  }, [startIndex,search_query]);

  return { books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading };
};

export default useFetchBooks;