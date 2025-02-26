import { useEffect, useState } from "react";
const useFetchBook = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBook = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await res.json();
      //console.log(data);
      setBook(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBook();
  }, [id]);

  return { book, loading, error };
};

export default useFetchBook;
