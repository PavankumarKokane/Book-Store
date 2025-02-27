import { createContext, useState } from "react";
import useFetchBooks from "../hooks/useFetchBooks";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookName, setBookName] = useState("a");
  const [page,setPage] = useState("Home");
  const [search,setSearch] = useState(false);
  const { books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading } = useFetchBooks(bookName,page);

  const changePage = (newpage) => {
    if (page != newpage) {
        setPage(newpage);
        setBooks([]);
        setTotal(0);
        setSearch(false);
    }
};

const changeBookName = (newbookName) => {
    if (bookName != newbookName) {
        setBookName(newbookName);
        setBooks([]);
        setTotal(0);
    }
};  

  return <BooksContext.Provider value={{ books, setBooks, startIndex, setstartIndex, total, setTotal, error, setError, loading, changeBookName, changePage, search, setSearch }}>{children}</BooksContext.Provider>;
};